const express = require("express");
const feed = require("../controllers/feedController");
const {
  servePrerendered,
  missingFile,
  serveAdminShell,
  renderPage,
} = require("../controllers/pageController");

const router = express.Router();

// Express routes GET handlers for HEAD requests too.
router.get("/sitemap.xml", feed.sitemap);
router.get("/rss.xml", feed.rss);

router.get(["/admin", "/admin/*"], serveAdminShell);

// Static pages from dist/ first; everything else is rendered from Firestore.
router.get("*", servePrerendered, missingFile, renderPage);

module.exports = router;
