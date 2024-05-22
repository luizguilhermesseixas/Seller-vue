import { defineStore } from 'pinia'
import { ApiService } from '@/utils/ApiService'

export const useStoresStore = defineStore('stores', {
  state: () => ({
    stores: [] as any[]
  }),
  actions: {
    async getStores() {
      const apiService = new ApiService()

      this.stores = await apiService.getStores()
    },
    async createStore(newStore: string) {
      const apiService = new ApiService()

      const createdStore = await apiService.createStore(newStore)
      this.stores.push(createdStore)
      return createdStore
    }
  }
})
