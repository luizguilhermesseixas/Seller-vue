import { defineStore } from 'pinia'
import { apiService } from '@/utils/ApiService'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as any[]
  }),
  actions: {
    async getProducts(storeId: number) {
      this.products = await apiService.getProducts(storeId)
      console.log('euuuu', this.products)
      return this.products
    }
  }
})
