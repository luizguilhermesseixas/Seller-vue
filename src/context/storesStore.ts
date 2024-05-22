import { defineStore } from 'pinia'
import { apiService } from '@/utils/ApiService'

export const useStoresStore = defineStore('stores', {
  state: () => ({
    stores: [] as any[]
  }),
  actions: {
    async getStores() {
      this.stores = await apiService.getStores()
    },
    async createStore(newStore: string) {
      const createdStore = await apiService.createStore(newStore)
      this.stores.push(createdStore)
      return createdStore
    }
  }
})
