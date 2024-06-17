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

    const headers = {
      ...options.headers,
      accept: 'application/json',
      'Content-Type': 'application/json',
      'X-API-KEY': 'qHH+dy7N9pITXVXS9l+3+jGDDyk=',
      Authorization: `Bearer ${token}`
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

  async getStores() {
    const response = await this.fetchWithToken('http://localhost:3000/stores')

    return response
  }

  async getStoreById(id: number) {
    const response = await this.fetchWithToken(`http://localhost:3000/stores/${id}`)

    return response
  }

  async createStore(name: String) {
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

  async updateStore(id: number, newName: String) {
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

  async destroyStore(id: number) {
    const response = await this.fetchWithToken(`http://localhost:3000/stores/${id}`, {
      method: 'DELETE'
    })

    return response
  }

  async getProducts(id: number) {
    const response = await this.fetchWithToken(`http://localhost:3000/stores/${id}/products`)

    return response.result.products
  }

  async getProductById(storeId: number, productId: number) {
    const response = await this.fetchWithToken(
      `http://localhost:3000/stores/${storeId}/products/${productId}`
    )

    return response
  }

  async createProduct(
    storeId: number,
    title: string,
    description: string,
    price: number,
    image: string
  ) {
    const body = {
      product: {
        title,
        description,
        price,
        image
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
    title: string,
    description: string,
    price: number,
    image: string
  ) {
    const body = {
      product: {
        title,
        description,
        price,
        image
      }
    }

    const response = await this.fetchWithToken(
      `http://localhost:3000/stores/${storeId}/products/${productId}`,
      {
        method: 'PUT',
        body: JSON.stringify(body)
      }
    )

    return response
  }

  async destroyProduct(storeId: number, productId: number) {
    const response = await this.fetchWithToken(
      `http://localhost:3000/stores/${storeId}/products/${productId}`,
      {
        method: 'DELETE'
      }
    )

    return response
  }
}

const apiService = ApiService.getInstance()

export { apiService }
