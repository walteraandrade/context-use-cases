import * as React from "react"
import { useUserStore } from "../core/user-store"

export interface User {
  email: string
  password: string
}

interface UserContext {
  user: User | null
  isLoggedIn: boolean
  logIn: (user: User) => void
  logOut: () => void
}

const UserContext = React.createContext<UserContext | null>(null)

export const UserContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { user, addToStore, clearStore } = useUserStore()
  const [isLoggedIn, setIsLoggedIn] = React.useState(!!user)

  React.useEffect(() => {
    if (user?.email) {
      setIsLoggedIn(true)
    } else {
      return
    }
  }, [user])

  function logIn(user: User) {
    addToStore(user)
    setIsLoggedIn(true)
  }

  function logOut() {
    clearStore()
    setIsLoggedIn(false)
  }
  return (
    <UserContext.Provider value={{ user, isLoggedIn, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  const context = React.useContext(UserContext)
  if (!context) {
    throw new Error("UserContext must be used inside UserContextProvider")
  }
  return context
}
