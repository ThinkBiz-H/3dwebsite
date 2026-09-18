import { db } from '../firebase/config'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  increment,
  limit as fbLimit,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from 'firebase/firestore'

const READ_TIMEOUT_MS = 10000

/**
 * Firestore's client SDK can retry its realtime "Listen" channel for a very
 * long time against an unreachable or misconfigured project instead of
 * rejecting quickly — without this, a bad .env value hangs every page on
 * "Loading…" forever with no way for the UI to show an error.
 */
function withTimeout(promise, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`Timed out waiting for Firestore (${label}). Check your Firebase configuration.`)), READ_TIMEOUT_MS)
    ),
  ])
}

/**
 * Blogs and articles are structurally identical (same fields, same admin
 * workflow) and live in separate Firestore collections. This factory is the
 * single place that logic lives, so the two feature sets never drift apart.
 *
 * Category/search filtering happens client-side rather than as Firestore
 * `where` clauses — this is a small-to-medium content site, not a search
 * engine, and skipping composite indexes keeps the Firestore setup to
 * "create a collection" instead of "manage index deployments."
 */
export function createPostsService(collectionName) {
  const colRef = collection(db, collectionName)

  async function list({ publishedOnly = true } = {}) {
    // `where('published', '==', true) + orderBy('createdAt')` together need a
    // composite index. Filtering on just `published` (single-field, always
    // indexed) and sorting the small result set in JS avoids ever having to
    // create one — matching the "no index management" goal above.
    const constraints = publishedOnly ? [where('published', '==', true)] : [orderBy('createdAt', 'desc')]
    const snap = await withTimeout(getDocs(query(colRef, ...constraints)), `${collectionName}.list`)
    const posts = snap.docs.map((d) => normalize(d))
    return publishedOnly ? posts.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)) : posts
  }

  async function getById(id) {
    const snap = await withTimeout(getDoc(doc(db, collectionName, id)), `${collectionName}.getById`)
    return snap.exists() ? normalize(snap) : null
  }

  async function getBySlug(slug) {
    const snap = await withTimeout(getDocs(query(colRef, where('slug', '==', slug), fbLimit(1))), `${collectionName}.getBySlug`)
    if (snap.empty) return null
    return normalize(snap.docs[0])
  }

  async function slugExists(slug, excludeId = null) {
    const snap = await withTimeout(getDocs(query(colRef, where('slug', '==', slug), fbLimit(2))), `${collectionName}.slugExists`)
    return snap.docs.some((d) => d.id !== excludeId)
  }

  async function create(data) {
    const ref = await addDoc(colRef, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
    return ref.id
  }

  async function update(id, data) {
    await updateDoc(doc(db, collectionName, id), {
      ...data,
      updatedAt: serverTimestamp(),
    })
  }

  async function remove(id) {
    await deleteDoc(doc(db, collectionName, id))
  }

  /** Fire-and-forget view counter — never blocks or fails the page for the reader. */
  function incrementViews(id) {
    updateDoc(doc(db, collectionName, id), { views: increment(1) }).catch(() => {})
  }

  /** Fire-and-forget like counter, mirroring incrementViews — the reader's own liked/unliked state is tracked client-side (see useLikes.js). */
  function incrementLikes(id) {
    updateDoc(doc(db, collectionName, id), { likes: increment(1) }).catch(() => {})
  }

  function decrementLikes(id) {
    updateDoc(doc(db, collectionName, id), { likes: increment(-1) }).catch(() => {})
  }

  return { list, getById, getBySlug, slugExists, create, update, remove, incrementViews, incrementLikes, decrementLikes }
}

function normalize(snap) {
  const data = snap.data()
  return {
    id: snap.id,
    ...data,
    views: data.views || 0,
    likes: data.likes || 0,
    faqs: Array.isArray(data.faqs) ? data.faqs : [],
    keyTakeaways: Array.isArray(data.keyTakeaways) ? data.keyTakeaways : [],
    createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : null,
    updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate() : null,
  }
}
