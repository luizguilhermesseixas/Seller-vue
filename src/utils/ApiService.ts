import type { INewProduct, IProduct } from '@/interfaces/IProduct'
import type { IStore } from '@/interfaces/IStore'

// Objective: Create a service to handle all the API calls.
class ApiService {
  private static instance: ApiService

  private constructor() {}

  public static getInstance() {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService()
    }

    return ApiService.instance
  }

  private async fetchWithToken(url: string, options: RequestInit = {}) {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')

    const headers: HeadersInit = {
      accept: 'application/json',
      'X-API-KEY': 'qHH+dy7N9pITXVXS9l+3+jGDDyk=',
      Authorization: `Bearer ${token}`
    }

    if (!(options.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json'
    }

    const response = await fetch(url, {
      ...options,
      headers
    })

    if (!response.ok) {
      throw new Error('Failed to fetch')
    }

    const data = await response.json()
    return data
  }

  async getStores(): Promise<IStore[]> {
    const response = await this.fetchWithToken('http://localhost:3000/stores')

    console.log('Todas as Lojas', response)

    return response
  }

  async getStoreById(id: number): Promise<IStore> {
    const response = await this.fetchWithToken(`http://localhost:3000/stores/${id}`)

    console.log('Loja por id', response)
    return response
  }

  async createStore(name: String): Promise<IStore> {
    const body = {
      store: {
        name
      }
    }

    const response = await this.fetchWithToken('http://localhost:3000/stores', {
      method: 'POST',
      body: JSON.stringify(body)
    })

    return response
  }

  async updateStore(id: number, newName: String): Promise<IStore> {
    const body = {
      store: {
        name: newName
      }
    }

    const response = await this.fetchWithToken(`http://localhost:3000/stores/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body)
    })

    return response
  }

  async destroyStore(id: number): Promise<void> {
    const response = await this.fetchWithToken(`http://localhost:3000/stores/${id}`, {
      method: 'DELETE'
    })

    return response
  }

  async getProducts(id: number): Promise<IProduct[]> {
    const response = await this.fetchWithToken(`http://localhost:3000/stores/${id}/products`)

    console.log('Todos os Produtos', response)

    return response.result.products
  }

  async getProductById(storeId: number, productId: number): Promise<IProduct> {
    const response = await this.fetchWithToken(
      `http://localhost:3000/stores/${storeId}/products/${productId}`
    )

    console.log('Produto por id', response)

    return response
  }

  async createProduct(storeId: number, newProduct: INewProduct): Promise<IProduct> {
    const body = {
      product: {
        title: newProduct.title,
        description: newProduct.description,
        price: newProduct.price,
        image: newProduct.image
      }
    }

    const response = await this.fetchWithToken(`http://localhost:3000/stores/${storeId}/products`, {
      method: 'POST',
      body: JSON.stringify(body)
    })

    return response
  }

  async updateProduct(
    storeId: number,
    productId: number,
    newProduct: INewProduct
  ): Promise<IProduct> {
    const formData = new FormData()

    formData.append('product[title]', newProduct.title)
    formData.append('product[description]', newProduct.description)
    formData.append('product[price]', newProduct.price.toString())
    formData.append('product[image]', newProduct.image)

    const response = await this.fetchWithToken(
      `http://localhost:3000/stores/${storeId}/products/${productId}`,
      {
        method: 'PUT',
        body: formData
      }
    )

    console.log('Produto Atualizado', response)

    return response
  }

  async destroyProduct(storeId: number, productId: number): Promise<IProduct> {
    const response = await this.fetchWithToken(
      `http://localhost:3000/stores/${storeId}/products/${productId}`,
      {
        method: 'DELETE'
      }
    )

    console.log('Produto Deletado', response)

    return response
  }
}

const apiService = ApiService.getInstance()

export { apiService }
