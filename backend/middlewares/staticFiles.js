const express = require("express");
const { distDir } = require("../config");

const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * Real files from dist/ (JS, CSS, images, robots.txt, sitemap.xml…).
 * Directories are left to the page routes (index: false), which serve the
 * prerendered index.html without a redirect.
 */
module.exports = express.static(distDir, {
  index: false,
  redirect: false,
  dotfiles: "ignore",
  setHeaders(res, filePath) {
    if (/[\\/]assets[\\/]/.test(filePath)) {
      // Vite fingerprints everything in /assets, so it can be cached forever.
      res.setHeader("Cache-Control", `public, max-age=${ONE_YEAR}, immutable`);
    } else if (filePath.endsWith(".html")) {
      res.setHeader("Cache-Control", "no-cache");
    } else {
      res.setHeader("Cache-Control", "public, max-age=3600");
    }
  },
});
