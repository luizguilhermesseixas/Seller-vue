// Objective: Create a service to handle all the API calls.

class ApiService {
  constructor() {}

  private async fetchWithToken(url: string, options: RequestInit = {}) {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')

    const headers = {
      ...options.headers,
      accept: 'application/json',
      'Content-Type': 'application/json',
      'X-API-KEY': 'qHH+dy7N9pITXVXS9l+3GDDyk=',
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
}

export { ApiService }
