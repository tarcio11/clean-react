import { SetStorage, GetStorage } from '@/data/protocols/cache'

export class LocalStorageAdapter implements SetStorage, GetStorage {
  set (key: string, value: object): void {
    return value
      ? localStorage.setItem(key, JSON.stringify(value))
      : localStorage.removeItem(key)
  }

  get (key: string): any {
    return JSON.parse(localStorage.getItem(key))
  }
}
