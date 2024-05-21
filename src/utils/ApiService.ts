// Objective: Create a service to handle all the API calls.
import { Auth } from './Auth'

class ApiService {
  private auth: Auth

  constructor(auth: Auth) {
    this.auth = auth
  }

  async createStore(name: String, onSuccess: () => void, onFailure: () => void) {
    const token = this.auth.getToken()
    const response = await fetch('http://localhost:3000/stores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ store: { name } })
    })

    if (response.ok) {
      onSuccess()
    } else {
      onFailure()
    }
  }
}

export { ApiService }
