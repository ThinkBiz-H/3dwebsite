const { db } = require("../firebase");
const { listCacheSeconds } = require("../config");

// collection → { expires, promise } — the promise is cached so concurrent
// requests share one Firestore query.
const listCache = new Map();

function toDoc(snap) {
  return { id: snap.id, ...snap.data() };
}

/**
 * Published documents of a collection, briefly cached (LIST_CACHE_SECONDS).
 * Single-field filter only — the same "no composite index" rule as the app.
 */
function listPublished(collection) {
  const hit = listCache.get(collection);
  if (hit && hit.expires > Date.now()) return hit.promise;

  const promise = db
    .collection(collection)
    .where("published", "==", true)
    .get()
    .then((snap) => snap.docs.map(toDoc));

  listCache.set(collection, { expires: Date.now() + listCacheSeconds * 1000, promise });
  promise.catch(() => listCache.delete(collection));
  return promise;
}

/** One document by slug, always read fresh (published or not — callers decide). */
async function getBySlug(collection, slug) {
  const snap = await db.collection(collection).where("slug", "==", slug).limit(1).get();
  return snap.empty ? null : toDoc(snap.docs[0]);
}

module.exports = { listPublished, getBySlug };
