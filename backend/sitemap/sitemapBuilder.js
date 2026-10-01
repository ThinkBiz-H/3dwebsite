const fs = require("node:fs");
const path = require("node:path");
const { distDir, siteUrl } = require("../config");
const { listPublished } = require("../services/contentService");
const { slugify, escapeXml, toDate } = require("../utils/slugify");

const GUIDE_SECTIONS = new Set(["getting-started", "safety", "coins", "exchanges", "taxes", "glossary"]);

/** Every page vite-ssg prerendered: dist/<path>/index.html → /<path>. */
function staticPaths(dir = distDir, prefix = "") {
  const paths = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name === "assets") continue;
    if (entry.isDirectory()) {
      paths.push(...staticPaths(path.join(dir, entry.name), `${prefix}/${entry.name}`));
    } else if (entry.name === "index.html") {
      paths.push(prefix || "/");
    }
  }
  return paths;
}

function urlEntry(urlPath, lastmod) {
  const date = toDate(lastmod);
  return [
    "  <url>",
    `    <loc>${escapeXml(siteUrl + urlPath)}</loc>`,
    date ? `    <lastmod>${date.toISOString().slice(0, 10)}</lastmod>` : null,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
}

/** Built per request from Firestore, so new posts are listed immediately. */
async function buildSitemap() {
  const [articles, blogs, pages] = await Promise.all([
    listPublished("articles"),
    listPublished("blogs"),
    listPublished("pages"),
  ]);
  const posts = [...articles, ...blogs].filter((p) => p.slug);

  const categories = new Set(posts.filter((p) => p.category).map((p) => slugify(p.category)));
  const tags = new Set(posts.flatMap((p) => p.tags || []).map((t) => slugify(t)));

  const articlePath = (a) =>
    GUIDE_SECTIONS.has(a.guideSection) ? `/${a.guideSection}/${a.slug}` : `/articles/${a.slug}`;

  const urls = [
    ...staticPaths().sort().map((p) => urlEntry(p)),
    ...articles.filter((a) => a.slug).map((a) => urlEntry(articlePath(a), a.updatedAt || a.createdAt)),
    ...blogs.filter((b) => b.slug).map((b) => urlEntry(`/blog/${b.slug}`, b.updatedAt || b.createdAt)),
    ...pages.filter((p) => p.slug).map((p) => urlEntry(`/${p.slug}`, p.updatedAt || p.createdAt)),
    ...[...categories].filter(Boolean).map((c) => urlEntry(`/category/${c}`)),
    ...[...tags].filter(Boolean).map((t) => urlEntry(`/tag/${t}`)),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
}

module.exports = { buildSitemap };
