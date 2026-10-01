const fs = require("node:fs");
const path = require("node:path");
const { distDir } = require("../config");

/**
 * Maps a URL path to the HTML file vite-ssg prerendered for it
 * (dirStyle "nested"):  "/" → dist/index.html,  "/about" → dist/about/index.html.
 * Returns null when the route wasn't prerendered or the path tries to
 * escape dist/.
 */
function resolvePrerenderedPage(urlPath) {
  let decoded;
  try {
    decoded = decodeURIComponent(urlPath);
  } catch {
    return null;
  }

  if (decoded.includes("\0")) return null;

  const file = path.resolve(distDir, `.${decoded}`, "index.html");
  if (!file.startsWith(distDir + path.sep)) return null;

  try {
    return fs.statSync(file).isFile() ? file : null;
  } catch {
    return null;
  }
}

/** True for paths that name a file (/assets/app.js, /favicon.svg), not a page. */
function looksLikeFile(urlPath) {
  return path.posix.extname(urlPath) !== "";
}

module.exports = { resolvePrerenderedPage, looksLikeFile };
