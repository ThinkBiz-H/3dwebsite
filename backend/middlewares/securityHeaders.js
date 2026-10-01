/**
 * Baseline hardening headers. No Content-Security-Policy here: the site
 * loads Google Tag Manager, Google Fonts, Cloudinary, Firebase and YouTube
 * embeds, and a CSP that hasn't been tuned against those would break them.
 */
function securityHeaders(req, res, next) {
  res.set({
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  });
  next();
}

module.exports = securityHeaders;
