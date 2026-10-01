const fs = require("node:fs");
const path = require("node:path");

const projectRoot = path.join(__dirname, "..", "..");

// The first service-account key that exists: an explicit path, one placed
// inside backend/, or the one in the project root.
function findServiceAccount() {
  const candidates = [
    process.env.FIREBASE_SERVICE_ACCOUNT_PATH,
    path.join(__dirname, "..", "serviceAccountKey.json"),
    path.join(projectRoot, "serviceAccountKey.json"),
  ].filter(Boolean);
  return candidates.find((file) => fs.existsSync(file)) || null;
}

// cPanel's "Setup Node.js App" (Passenger) supplies PORT; everything else
// can be set as environment variables in that same screen.
module.exports = {
  port: Number(process.env.PORT) || 3000,

  siteUrl: (process.env.SITE_URL || "https://www.cryptolearner.us").replace(/\/+$/, ""),

  // vite-ssg build output (`npm run build` in the project root).
  distDir: path.resolve(process.env.DIST_DIR || path.join(projectRoot, "dist")),

  // Server bundle of the Vue app, built by the same `npm run build`.
  ssrDir: path.resolve(process.env.SSR_DIR || path.join(__dirname, "..", "ssr")),

  // null → firebase-admin falls back to GOOGLE_APPLICATION_CREDENTIALS.
  serviceAccountPath: findServiceAccount(),

  // How long published-post *lists* (related/next/prev cards, category and
  // tag pages, sitemap, RSS) are reused between requests. The article being
  // viewed is always read fresh, so publishing is visible immediately.
  listCacheSeconds: Number(process.env.LIST_CACHE_SECONDS ?? 30),
};
