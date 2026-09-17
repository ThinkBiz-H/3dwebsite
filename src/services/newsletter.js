import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config'

export async function subscribeNewsletter(email, { source = 'blog' } = {}) {
  await addDoc(collection(db, 'newsletter'), {
    email,
    source,
    createdAt: serverTimestamp(),
  })
}
