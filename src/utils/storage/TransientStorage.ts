import { type IStorage } from '@/interfaces/IStorage'

export default class TransientStorage implements IStorage {
  store(key: string, value: string) {
    sessionStorage.setItem(key, value)
  }

  get(key: string) {
    return sessionStorage.getItem(key)
  }

  remove(key: string) {
    sessionStorage.removeItem(key)
  }
}
