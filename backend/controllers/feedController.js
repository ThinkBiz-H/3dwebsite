const { buildSitemap } = require("../sitemap/sitemapBuilder");
const { buildRss } = require("../rss/rssBuilder");

function xml(build, contentType) {
  return async (req, res, next) => {
    try {
      const body = await build();
      res.set({ "Content-Type": contentType, "Cache-Control": "no-cache" }).send(body);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = {
  sitemap: xml(buildSitemap, "application/xml; charset=utf-8"),
  rss: xml(buildRss, "application/rss+xml; charset=utf-8"),
};
