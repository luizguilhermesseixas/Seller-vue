import { defineStore } from 'pinia'
import { apiService } from '@/utils/ApiService'
import type { IStore } from '@/interfaces/IStore'

export const useStoresStore = defineStore('stores', {
  state: () => ({
    stores: [] as IStore[]
    // currentStore: null as any | null
  }),
  actions: {
    async getStores(): Promise<void> {
      this.stores = await apiService.getStores()
    },

    async getStoreById(id: number): Promise<IStore> {
      const response = await apiService.getStoreById(id)
      return response
    },

    async createStore(newStore: string): Promise<IStore> {
      const createdStore = await apiService.createStore(newStore)
      this.stores.push(createdStore)
      return createdStore
    },

    async updateStore(id: number, newName: string): Promise<IStore> {
      const updatedStore = await apiService.updateStore(id, newName)
      const storeIndex = this.stores.findIndex((store) => store.id === id)
      this.stores[storeIndex] = updatedStore
      return updatedStore
    },

    async destroyStore(id: number): Promise<any> {
      const response = await apiService.destroyStore(id)
      await this.getStores()
      return response
    }
  }
})
