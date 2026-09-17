import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { app } from './config'

let authInstance = null

/** Lazily created — see the note in config.js for why. */
function getAuthInstance() {
  if (!authInstance) authInstance = getAuth(app)
  return authInstance
}

export function firebaseLogin(email, password) {
  return signInWithEmailAndPassword(getAuthInstance(), email, password)
}

export function firebaseLogout() {
  return signOut(getAuthInstance())
}

/** Resolves once with the current user (or null) — used to gate router navigation. */
export function getCurrentUser() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(getAuthInstance(), (user) => {
      unsubscribe()
      resolve(user)
    })
  })
}

export function watchAuth(callback) {
  return onAuthStateChanged(getAuthInstance(), callback)
}
