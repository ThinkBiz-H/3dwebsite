// Generates public/sitemap.xml from published blogs + articles in Firestore.
// Run with `npm run generate-sitemap` before deploying, or on a schedule —
// this is a static SPA, so the sitemap only reflects content as of the last run.
import { writeFileSync } from 'node:fs'
import { config } from 'dotenv'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

config()

const SITE_URL = process.env.VITE_SITE_URL || 'https://lumenledger.com'

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function publishedSlugs(collectionName) {
  const snap = await getDocs(query(collection(db, collectionName), where('published', '==', true)))
  return snap.docs.map((d) => ({ slug: d.data().slug, updatedAt: d.data().updatedAt?.toDate?.() }))
}

function urlEntry(loc, lastmod) {
  return `  <url>\n    <loc>${loc}</loc>\n${lastmod ? `    <lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>\n` : ''}  </url>`
}

async function main() {
  const staticPaths = ['/', '/about', '/contact', '/blog', '/articles']
  const [blogs, articles] = await Promise.all([publishedSlugs('blogs'), publishedSlugs('articles')])

  const urls = [
    ...staticPaths.map((p) => urlEntry(`${SITE_URL}${p}`)),
    ...blogs.map((b) => urlEntry(`${SITE_URL}/blog/${b.slug}`, b.updatedAt)),
    ...articles.map((a) => urlEntry(`${SITE_URL}/articles/${a.slug}`, a.updatedAt)),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`

  writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml)
  console.log(`sitemap.xml written with ${urls.length} URLs`)
}

main().catch((err) => {
  console.error('Failed to generate sitemap:', err.message)
  process.exit(1)
})
