import { createStorage } from './storage'
import { type IStorage } from '@/interfaces/IStorage'

class Auth {
  private storage: IStorage

  constructor(persistent = false) {
    this.storage = createStorage(persistent)
  }

  private getFallback(key: string): string | null {
    const transient = createStorage(false)
    const persistent = createStorage(true)
    return transient.get(key) || persistent.get(key)
  }

  async success(response: Response, onSuccess: () => void) {
    const data = await response.json()

    this.storage.store('token', data.token)
    this.storage.store('email', data.email)

    onSuccess()
  }

  async failure(response: Response, onFailure: () => void) {
    onFailure()
  }

  isLoggedIn() {
    return Boolean(this.getFallback('token'))
  }

  currentUser() {
    if (!this.isLoggedIn()) {
      return null
    }
    return {
      email: this.getFallback('email')
    }
  }

  signOut(andThen = () => {}) {
    const transient = createStorage(false)
    const persistent = createStorage(true)
    transient.remove('token')
    transient.remove('email')
    persistent.remove('token')
    persistent.remove('email')
    andThen()
  }

  async signIn(email: string, password: string, onSuccess: () => void, onFailure: () => void) {
    const body = {
      login: {
        email,
        password
      }
    }

    const response = await fetch('http://localhost:3000/sign_in', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-API-KEY': 'qHH+dy7N9pITXVXS9l+3+jGDDyk='
      },
      body: JSON.stringify(body)
    })

    if (response.ok) {
      this.success(response, onSuccess)
    } else {
      this.failure(response, onFailure)
    }
  }
}

export { Auth }
