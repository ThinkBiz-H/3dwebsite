import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

if (import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.log('[firebase] initialized project:', firebaseConfig.projectId, '| authDomain:', firebaseConfig.authDomain)
}

// Auth is intentionally NOT initialized here. `getAuth()` validates the API
// key synchronously and throws if it's missing/invalid — since this module
// is imported by every Firestore-touching page (blog, articles, contact),
// eagerly creating Auth here would crash pages that never use it at all
// whenever Firebase isn't configured yet. See firebase/auth.js.
