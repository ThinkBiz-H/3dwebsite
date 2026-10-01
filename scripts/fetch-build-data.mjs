import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serviceAccount = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../serviceAccountKey.json"), "utf8"),
);

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

async function fetchCollection(name) {
  const snapshot = await db.collection(name).get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

async function run() {
  const blogs = await fetchCollection("blogs");
  const articles = await fetchCollection("articles");
  const pages = await fetchCollection("pages");

  const outputDir = path.join(__dirname, "../src/generated");

  fs.mkdirSync(outputDir, { recursive: true });

  fs.writeFileSync(
    path.join(outputDir, "build-data.json"),
    JSON.stringify(
      {
        blogs,
        articles,
        pages,
      },
      null,
      2,
    ),
  );

  console.log("✅ Build data generated");
  console.log(`Blogs: ${blogs.length}`);
  console.log(`Articles: ${articles.length}`);
  console.log(`Pages: ${pages.length}`);
}

run().catch(console.error);
