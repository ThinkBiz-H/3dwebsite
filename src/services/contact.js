import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config'

export async function submitContactMessage({ name, email, subject, message }) {
  await addDoc(collection(db, 'messages'), {
    name,
    email,
    subject,
    message,
    read: false,
    createdAt: serverTimestamp(),
  })
}
