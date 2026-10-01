const { siteUrl } = require("../config");
const { listPublished } = require("../services/contentService");
const { escapeXml, toDate } = require("../utils/slugify");

/** Blog feed, newest first — built per request from Firestore. */
async function buildRss() {
  const posts = (await listPublished("blogs"))
    .filter((p) => p.slug)
    .sort((a, b) => (toDate(b.createdAt) || 0) - (toDate(a.createdAt) || 0));

  const items = posts
    .map((p) => {
      const link = escapeXml(`${siteUrl}/blog/${p.slug}`);
      const date = toDate(p.createdAt) || new Date();
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <description>${escapeXml(p.description)}</description>
      <pubDate>${date.toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>cryptolearner.us Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Plain-language lessons and updates on blockchain, wallets, and digital assets.</description>
${items}
  </channel>
</rss>
`;
}

module.exports = { buildRss };
