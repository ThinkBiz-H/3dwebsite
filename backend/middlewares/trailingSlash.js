/**
 * /about/ → 301 /about. Canonical URLs (and the sitemap) have no trailing
 * slash; serving both would split one page across two URLs.
 */
function trailingSlash(req, res, next) {
  if (req.path.length > 1 && req.path.endsWith("/")) {
    const query = req.originalUrl.slice(req.path.length);
    res.redirect(301, req.path.replace(/\/+$/, "") + query);
    return;
  }
  next();
}

module.exports = trailingSlash;
