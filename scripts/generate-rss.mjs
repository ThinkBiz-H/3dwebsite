// Generates public/rss.xml from published blog posts in Firestore.
// Run with `npm run generate-rss` before deploying, or on a schedule.
import { writeFileSync } from 'node:fs'
import { config } from 'dotenv'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, query, where, orderBy } from 'firebase/firestore'

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

function escapeXml(str = '') {
  return str.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]))
}

async function main() {
  const snap = await getDocs(query(collection(db, 'blogs'), where('published', '==', true), orderBy('createdAt', 'desc')))
  const posts = snap.docs.map((d) => d.data())

  const items = posts
    .map(
      (p) => `  <item>
    <title>${escapeXml(p.title)}</title>
    <link>${SITE_URL}/blog/${p.slug}</link>
    <guid>${SITE_URL}/blog/${p.slug}</guid>
    <description>${escapeXml(p.description)}</description>
    <pubDate>${(p.createdAt?.toDate?.() || new Date()).toUTCString()}</pubDate>
  </item>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Lumen Ledger Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Plain-language lessons and updates on blockchain, wallets, and digital assets.</description>
${items}
  </channel>
</rss>
`

  writeFileSync(new URL('../public/rss.xml', import.meta.url), xml)
  console.log(`rss.xml written with ${posts.length} items`)
}

main().catch((err) => {
  console.error('Failed to generate RSS feed:', err.message)
  process.exit(1)
})
