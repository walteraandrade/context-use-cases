import * as React from "react"

interface CartItem {
  image: string
  title: string
  qty: number
}
interface CounterContextProps {
  cartItems: CartItem[]
  addOne: (cartItem: CartItem) => void
  substractOne: (cartTitle: string) => void
}
const CounterContext = React.createContext<CounterContextProps | null>(null)

export function CounterContextProvider({ children }: React.PropsWithChildren) {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([])

  const addOne = (cartItem: CartItem) => {
    const itemIndex = cartItems.findIndex(
      (item) => item.title === cartItem.title
    )

    if (itemIndex !== -1) {
      // Product already exists in the cart, update the quantity
      setCartItems((prevItems) => {
        const updatedItems = [...prevItems]
        updatedItems[itemIndex].qty += 1
        return updatedItems
      })
    } else {
      // Product is not in the cart, add it as a new item
      setCartItems((prevItems) => [...prevItems, { ...cartItem, quantity: 1 }])
    }
  }

  const substractOne = (cartTitle: string) => {
    const oldCartItems = cartItems
    const newCartItems = oldCartItems?.filter(
      (cartItem) => cartItem.title !== cartTitle
    )
    setCartItems(newCartItems)
  }
  return (
    <CounterContext.Provider value={{ cartItems, addOne, substractOne }}>
      {children}
    </CounterContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCounterContext = () => {
  const context = React.useContext(CounterContext)
  if (!context) {
    throw new Error("CounterContext must be used inside CounterContextProvider")
  }

  return context
}
