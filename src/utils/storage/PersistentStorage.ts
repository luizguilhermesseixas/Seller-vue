import { type IStorage } from '@/interfaces/IStorage'

export default class PersistentStorage implements IStorage {
  store(key: string, value: string) {
    localStorage.setItem(key, value)
  }

  get(key: string) {
    return localStorage.getItem(key)
  }

  remove(key: string) {
    localStorage.removeItem(key)
  }
}
