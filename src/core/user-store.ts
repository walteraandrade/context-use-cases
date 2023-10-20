import { User } from "../context/user.context"

const USER_STORE_KEY = "user-store"

export function useUserStore(): {
  user: User | null
  addToStore: (user: User) => void
  clearStore: () => void
} {
  function getUser(): User | null {
    const storeItem = localStorage.getItem(USER_STORE_KEY)
    if (storeItem) {
      return JSON.parse(storeItem)
    } else return null
  }

  function addToStore(user: User) {
    localStorage.setItem(USER_STORE_KEY, JSON.stringify(user))
  }

  function clearStore() {
    localStorage.clear()
  }
  return {
    user: getUser(),
    addToStore,
    clearStore,
  }
}
