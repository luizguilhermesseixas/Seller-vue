import { defineStore } from 'pinia'
import { apiService } from '@/utils/ApiService'

export const useStoresStore = defineStore('stores', {
  state: () => ({
    stores: [] as any[]
    // currentStore: null as any | null
  }),
  actions: {
    async getStores() {
      this.stores = await apiService.getStores()
    },

    async getStoreById(id: number) {
      const response = await apiService.getStoreById(id)
      return response
    },

    async createStore(newStore: string) {
      const createdStore = await apiService.createStore(newStore)
      this.stores.push(createdStore)
      return createdStore
    },

    async updateStore(id: number, newName: string) {
      const updatedStore = await apiService.updateStore(id, newName)
      const storeIndex = this.stores.findIndex((store) => store.id === id)
      this.stores[storeIndex] = updatedStore
      return updatedStore
    },

    async destroyStore(id: number) {
      const response = await apiService.destroyStore(id)
      await this.getStores()
      return response
    }
  }
})
