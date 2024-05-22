// Objective: Create a service to handle all the API calls.

class ApiService {
  constructor() {}

  async getStores() {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')

    const response = await fetch('http://localhost:3000/stores', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-API-KEY': 'qHH+dy7N9pITXVXS9l+3+jGDDyk=',
        Authorization: `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch stores')
    } else {
      const data = await response.json()
      return data
    }
  }

  async createStore(name: String) {
    const body = {
      store: {
        name
      }
    }

    const token = localStorage.getItem('token') || sessionStorage.getItem('token')

    const response = await fetch('http://localhost:3000/stores', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-API-KEY': 'qHH+dy7N9pITXVXS9l+3+jGDDyk=',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new Error('Failed to create store')
    } else {
      const data = await response.json()
      return data
    }
  }
}

export { ApiService }
