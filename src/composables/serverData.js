import { normalize as normalizePost } from "../services/posts";
import { normalize as normalizePage } from "../services/pages";

/**
 * inject() key for vite-ssg's initialState (provided in main-ssg.js). Pages
 * rendered by the Express backend embed their data here, so the browser
 * hydrates from it instead of reading Firestore.
 */
export const PRERENDER_STATE = Symbol("prerender-state");

const DATE_FIELDS = new Set(["createdAt", "updatedAt"]);

let source = null;

/**
 * Server only. The Express backend (backend/services/contentService.js)
 * plugs in its firebase-admin reader:
 *   { listPublished(collection), getBySlug(collection, slug) }
 * Both resolve to raw documents ({ id, ...data }) with admin Timestamps.
 */
export function setServerDataSource(dataSource) {
  source = dataSource;
}

function requireSource() {
  if (!source) {
    throw new Error("[serverData] no data source — render through the Express backend.");
  }
  return source;
}

// Wrapping raw docs as snapshot-like objects lets the services' own
// normalize() shape them exactly like the browser's Firestore reads.
function asSnapshot(raw) {
  const { id, ...data } = raw;
  return { id, data: () => data };
}

export async function getServerPosts(collection) {
  const docs = await requireSource().listPublished(collection);
  return docs
    .map((raw) => normalizePost(asSnapshot(raw)))
    .filter((p) => p.published)
    .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
}

export async function getServerPost(collection, slug) {
  const raw = await requireSource().getBySlug(collection, slug);
  return raw ? normalizePost(asSnapshot(raw)) : null;
}

export async function getServerPage(slug) {
  const raw = await requireSource().getBySlug("pages", slug);
  return raw ? normalizePage(asSnapshot(raw)) : null;
}

/**
 * vite-ssg serialises initialState as JSON, which turns Dates into strings;
 * the components sort and format them as Dates, so restore them.
 */
export function reviveDates(value) {
  if (Array.isArray(value)) return value.map(reviveDates);
  if (!value || typeof value !== "object") return value;

  const out = {};
  for (const [key, v] of Object.entries(value)) {
    out[key] =
      DATE_FIELDS.has(key) && typeof v === "string" ? new Date(v) : reviveDates(v);
  }
  return out;
}
