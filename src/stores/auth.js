import { defineStore } from 'pinia'
import { firebaseLogin, firebaseLogout, getCurrentUser, watchAuth } from '../firebase/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    ready: false,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    init() {
      watchAuth((user) => {
        this.user = user
        this.ready = true
      })
    },
    async ensureLoaded() {
      if (this.ready) return this.user
      this.user = await getCurrentUser()
      this.ready = true
      return this.user
    },
    async login(email, password) {
      // Trim the email only — whitespace in a pasted address is a common,
      // silent cause of "invalid credential." The password is passed through
      // untouched, since trimming it could alter an intentionally-set value.
      const cred = await firebaseLogin(email.trim(), password)
      this.user = cred.user
      return cred.user
    },
    async logout() {
      await firebaseLogout()
      this.user = null
    },
  },
})
