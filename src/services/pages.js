import { db } from '../firebase/config'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit as fbLimit,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from 'firebase/firestore'

const READ_TIMEOUT_MS = 10000

function withTimeout(promise, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(
        () => reject(new Error(`Timed out waiting for Firestore (${label}). Check your Firebase configuration.`)),
        READ_TIMEOUT_MS
      )
    ),
  ])
}

const colRef = collection(db, 'pages')

export function normalize(snap) {
  const data = snap.data()
  return {
    id: snap.id,
    title: data.title || '',
    slug: data.slug || '',
    coverImage: data.coverImage || '',
    shortDescription: data.shortDescription || data.metaDescription || '',
    content: data.content || '',
    seoTitle: data.seoTitle || '',
    metaDescription: data.metaDescription || data.shortDescription || '',
    published: !!data.published,
    sortOrder: typeof data.sortOrder === 'number' ? data.sortOrder : Number(data.sortOrder) || 0,
    author: data.author || 'cryptolearner.us Team',
    createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : null,
    updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate() : null,
  }
}

/**
 * Fetch list of pages.
 * Filters & sorting are handled in memory to avoid requiring composite indexes in Firestore.
 */
export async function getPages({ publishedOnly = false } = {}) {
  const constraints = publishedOnly ? [where('published', '==', true)] : []
  const snap = await withTimeout(getDocs(query(colRef, ...constraints)), 'pages.list')
  const pages = snap.docs.map((d) => normalize(d))

  // Sort by sortOrder ascending, fallback to title
  return pages.sort((a, b) => {
    if (a.sortOrder !== b.sortOrder) {
      return a.sortOrder - b.sortOrder
    }
    return (a.title || '').localeCompare(b.title || '')
  })
}

export async function getPageById(id) {
  const snap = await withTimeout(getDoc(doc(db, 'pages', id)), 'pages.getById')
  return snap.exists() ? normalize(snap) : null
}

export async function getPageBySlug(slug) {
  const snap = await withTimeout(getDocs(query(colRef, where('slug', '==', slug), fbLimit(1))), 'pages.getBySlug')
  if (snap.empty) return null
  return normalize(snap.docs[0])
}

export async function pageSlugExists(slug, excludeId = null) {
  const snap = await withTimeout(getDocs(query(colRef, where('slug', '==', slug), fbLimit(2))), 'pages.slugExists')
  return snap.docs.some((d) => d.id !== excludeId)
}

export async function createPage(data) {
  const ref = await addDoc(colRef, {
    title: (data.title || '').trim(),
    slug: (data.slug || '').trim(),
    coverImage: data.coverImage || '',
    shortDescription: (data.shortDescription || '').trim(),
    content: data.content || '',
    seoTitle: (data.seoTitle || '').trim(),
    metaDescription: (data.metaDescription || data.shortDescription || '').trim(),
    published: !!data.published,
    sortOrder: Number(data.sortOrder) || 0,
    author: (data.author || '').trim() || 'cryptolearner.us Team',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
  return ref.id
}

export async function updatePage(id, data) {
  await updateDoc(doc(db, 'pages', id), {
    title: (data.title || '').trim(),
    slug: (data.slug || '').trim(),
    coverImage: data.coverImage || '',
    shortDescription: (data.shortDescription || '').trim(),
    content: data.content || '',
    seoTitle: (data.seoTitle || '').trim(),
    metaDescription: (data.metaDescription || data.shortDescription || '').trim(),
    published: !!data.published,
    sortOrder: Number(data.sortOrder) || 0,
    author: (data.author || '').trim() || 'cryptolearner.us Team',
    updatedAt: serverTimestamp(),
  })
}

export async function deletePage(id) {
  await deleteDoc(doc(db, 'pages', id))
}
