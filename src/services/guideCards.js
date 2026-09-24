import { db } from '../firebase/config'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore'

const COLLECTION = 'guideCards'
const colRef = collection(db, COLLECTION)

function normalize(snap) {
  const data = snap.data()
  return {
    id: snap.id,
    ...data,
    order: typeof data.order === 'number' ? data.order : 0,
    enabled: data.enabled !== false,
    createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : null,
    updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate() : null,
  }
}

/**
 * All guide cards, optionally narrowed to one category, sorted by `order`.
 * Uses at most a single-field `where` (never combined with an `orderBy` on a
 * different field), so — matching the rest of this codebase's Firestore
 * philosophy — this never needs a composite index; sorting happens in JS.
 */
export async function listGuideCards({ category, enabledOnly = false } = {}) {
  const constraints = category ? [where('category', '==', category)] : []
  const snap = await getDocs(query(colRef, ...constraints))
  let cards = snap.docs.map(normalize)
  if (enabledOnly) cards = cards.filter((c) => c.enabled)
  return cards.sort((a, b) => a.order - b.order)
}

export async function getGuideCardById(id) {
  const snap = await getDoc(doc(db, COLLECTION, id))
  return snap.exists() ? normalize(snap) : null
}

/**
 * `cardId` is globally unique across every category (not just within one),
 * so an article can resolve its guide card with a single
 * `where('guideCardId', '==', cardId)` lookup, with no risk of collision.
 */
export async function cardIdExists(cardId, excludeId = null) {
  const snap = await getDocs(query(colRef, where('cardId', '==', cardId)))
  return snap.docs.some((d) => d.id !== excludeId)
}

export async function createGuideCard(data) {
  const ref = await addDoc(colRef, { ...data, createdAt: serverTimestamp(), updatedAt: serverTimestamp() })
  return ref.id
}

export async function updateGuideCard(id, data) {
  await updateDoc(doc(db, COLLECTION, id), { ...data, updatedAt: serverTimestamp() })
}

export async function deleteGuideCard(id) {
  await deleteDoc(doc(db, COLLECTION, id))
}

/** Persists a drag-reordered list for one category as a single batched write. */
export async function reorderGuideCards(cards) {
  const batch = writeBatch(db)
  cards.forEach((card, index) => {
    batch.update(doc(db, COLLECTION, card.id), { order: index, updatedAt: serverTimestamp() })
  })
  await batch.commit()
}
