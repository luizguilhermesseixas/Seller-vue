import { defineStore } from 'pinia'
import { apiService } from '@/utils/ApiService'
import { a } from 'vitest/dist/suite-ynYMzeLu.js'

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
    },
    async updateStore(id: number, newName: string) {
      const updatedStore = await apiService.updateStore(id, newName)
      const storeIndex = this.stores.findIndex((store) => store.id === id)
      this.stores[storeIndex] = updatedStore
      return updatedStore
    }
  }
})
