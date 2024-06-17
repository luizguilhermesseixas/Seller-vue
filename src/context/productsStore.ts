import { defineStore } from 'pinia'
import { apiService } from '@/utils/ApiService'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as any[],
    currentProduct: null as any
  }),
  actions: {
    async getProducts(storeId: number) {
      this.products = await apiService.getProducts(storeId)
    },
    async getProductById(storeId: number, productId: number) {
      this.currentProduct = await apiService.getProductById(storeId, productId)
    }
  }
})
