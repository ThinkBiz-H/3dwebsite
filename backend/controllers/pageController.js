const { resolvePrerenderedPage, looksLikeFile } = require("../utils/resolvePage");
const { renderAdminShell } = require("../utils/htmlTemplate");
const { renderUrl } = require("../services/renderService");

/** A static page vite-ssg prerendered (/, /about, /articles …). */
function servePrerendered(req, res, next) {
  const file = resolvePrerenderedPage(req.path);
  if (!file) return next();

  // no-cache = revalidate every time (cheap via ETag), so a new upload of
  // dist/ is visible immediately.
  res.set("Cache-Control", "no-cache");
  res.sendFile(file, (err) => err && next(err));
}

/**
 * A missing file must 404 as a file: answering /assets/old-chunk.js with
 * HTML would surface as a confusing MIME-type error in the browser.
 */
function missingFile(req, res, next) {
  if (!looksLikeFile(req.path)) return next();
  res.status(404).set("Cache-Control", "no-store").type("text/plain").send("Not Found");
}

/** Admin panel: client-rendered behind Firebase Auth, never indexed. */
function serveAdminShell(req, res) {
  res
    .set({ "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" })
    .type("html")
    .send(renderAdminShell());
}

/**
 * Everything else — articles, guides, blog posts, Firestore pages,
 * categories, tags, and real 404s — is rendered from Firestore on this
 * request: complete HTML, head tags and JSON-LD in the response.
 */
async function renderPage(req, res, next) {
  try {
    const result = await renderUrl(req.originalUrl);

    if (result.redirect) {
      res.redirect(301, result.redirect);
      return;
    }

    res
      .status(result.statusCode)
      // Rendered fresh each time: a publish or edit shows on the next request.
      .set("Cache-Control", result.statusCode === 200 ? "no-cache" : "no-store")
      .type("html")
      .send(result.html);
  } catch (err) {
    next(err);
  }
}

module.exports = { servePrerendered, missingFile, serveAdminShell, renderPage };
