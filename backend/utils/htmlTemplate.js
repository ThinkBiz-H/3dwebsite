const fs = require("node:fs");
const path = require("node:path");
const { distDir } = require("../config");

// Both written by `npm run build` (vite-ssg): the untouched client
// index.html, and the map from Vue modules to their JS/CSS chunks.
const TEMPLATE_FILE = path.join(distDir, ".vite", "index.template.html");
const MANIFEST_FILE = path.join(distDir, ".vite", "ssr-manifest.json");

const cache = new Map();

// Re-read when the file changes, so uploading a new dist/ is picked up
// without a restart.
function readCached(file, parse) {
  const { mtimeMs } = fs.statSync(file);
  const hit = cache.get(file);
  if (hit && hit.mtimeMs === mtimeMs) return hit.value;
  const value = parse(fs.readFileSync(file, "utf8"));
  cache.set(file, { mtimeMs, value });
  return value;
}

const getTemplate = () => readCached(TEMPLATE_FILE, (s) => s);
const getManifest = () => readCached(MANIFEST_FILE, JSON.parse);

/** JS/CSS chunks the rendered route needs — same rules as vite-ssg. */
function renderPreloadLinks(modules) {
  const manifest = getManifest();
  const files = new Set();
  for (const id of modules) for (const file of manifest[id] || []) files.add(file);

  let links = "";
  for (const file of files) {
    if (file.endsWith(".js")) links += `<link rel="modulepreload" crossorigin href="${file}">\n`;
    else if (file.endsWith(".css")) links += `<link rel="stylesheet" href="${file}">\n`;
  }
  return links;
}

/**
 * Assembles a page the way vite-ssg does for prerendered pages: unhead's
 * tags (which include charset/viewport) replace the template's, route
 * chunks are preloaded, and the app HTML plus its state go into #app.
 */
function renderDocument({ head, preloadLinks = "", appHtml = "", state = null }) {
  let html = getTemplate();

  if (head?.headTags) {
    html = html
      .replace(/<meta charset[^>]*>\s*/i, "")
      .replace(/<meta\s+name="viewport"[^>]*>\s*/i, "")
      .replace(/<head>/i, () => `<head>\n${head.headTags}\n`);
  }

  html = html.replace(/<\/head>/i, () => `${preloadLinks}</head>`);

  if (head?.htmlAttrs) html = html.replace(/<html[^>]*>/i, () => `<html ${head.htmlAttrs}>`);
  if (head?.bodyAttrs) html = html.replace(/<body/i, () => `<body ${head.bodyAttrs}`);

  if (appHtml) {
    const stateScript = state ? `\n<script>window.__INITIAL_STATE__=${state}</script>` : "";
    html = html.replace(
      '<div id="app"></div>',
      () => `<div id="app" data-server-rendered="true">${appHtml}</div>${stateScript}`,
    );
  }

  return html;
}

/** Client-only shell for the admin panel (Firebase Auth lives in the browser). */
function renderAdminShell() {
  return renderDocument({
    preloadLinks: '<title>Admin — cryptolearner.us</title>\n<meta name="robots" content="noindex, nofollow">\n',
  });
}

module.exports = { renderDocument, renderPreloadLinks, renderAdminShell, TEMPLATE_FILE, MANIFEST_FILE };
