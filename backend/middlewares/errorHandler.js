// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error(`[backend] ${req.method} ${req.originalUrl} failed:`, err);
  if (res.headersSent) return;
  res.status(500).set("Cache-Control", "no-store").type("text/plain").send("Internal Server Error");
}

module.exports = errorHandler;
