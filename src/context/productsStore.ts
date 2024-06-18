import type { IProduct, INewProduct } from '@/interfaces/IProduct'
import { defineStore } from 'pinia'
import { apiService } from '@/utils/ApiService'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as IProduct[],
    currentProduct: null as IProduct | null
  }),
  actions: {
    async getProducts(storeId: number): Promise<void> {
      this.products = await apiService.getProducts(storeId)
    },
    async getProductById(storeId: number, productId: number): Promise<void> {
      this.currentProduct = await apiService.getProductById(storeId, productId)
    },
    async createProduct(storeId: number, newProduct: INewProduct): Promise<IProduct> {
      const createdProduct = await apiService.createProduct(storeId, newProduct)
      await this.getProducts(storeId)
      return createdProduct
    },
    async updateProduct(
      storeId: number,
      productId: number,
      newProduct: INewProduct
    ): Promise<IProduct> {
      const updatedProduct = await apiService.updateProduct(storeId, productId, newProduct)

      return updatedProduct
    },
    async destroyProduct(storeId: number, productId: number): Promise<IProduct> {
      const response = await apiService.destroyProduct(storeId, productId)
      await this.getProducts(storeId)
      return response
    }
  }
})
