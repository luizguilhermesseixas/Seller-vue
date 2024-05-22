import { defineStore } from 'pinia'
import { Auth } from '@/utils/Auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    auth: null as unknown as Auth
  }),
  actions: {
    initializeAuth(remember: boolean) {
      this.auth = new Auth(remember)
    }
  }
})
