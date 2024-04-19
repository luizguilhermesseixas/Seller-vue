import { type IStorage } from '@/interfaces/IStorage'
import PersistentStorage from './PersistentStorage'
import TransientStorage from './TransientStorage'

const createStorage = (persistent: boolean): IStorage => {
  return persistent ? new PersistentStorage() : new TransientStorage()
}

export { createStorage }
