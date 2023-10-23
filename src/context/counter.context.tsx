import * as React from "react"

interface CartItem {
  image: string
  title: string
  qty: number
}
interface CounterContextProps {
  cartItems: CartItem[]
  addOne: (cartItem: CartItem) => void
  subtractOne: (cartTitle: string) => void
}

type CartAction =
  | { type: "ADD_ONE"; payload: CartItem }
  | { type: "SUBTRACT_ONE"; payload: string }

function cartReducer(state: CartItem[], action: CartAction) {
  const { type, payload } = action
  switch (type) {
    case "ADD_ONE": {
      const { title } = payload
      const itemIndex = state.findIndex((item) => item.title === title)
      if (itemIndex !== -1) {
        const updatedState = [...state]
        updatedState[itemIndex].qty += 1
        return updatedState
      }
      return [...state, { ...action.payload, qty: 1 }]
    }
    case "SUBTRACT_ONE":
      return state.filter((item) => item.title !== action.payload)

    default:
      return state
  }
}

const CounterContext = React.createContext<CounterContextProps | null>(null)

export function CounterContextProvider({ children }: React.PropsWithChildren) {
  const [cartItems, dispatch] = React.useReducer(cartReducer, [])

  const addOne = (cartItem: CartItem) => {
    dispatch({ type: "ADD_ONE", payload: cartItem })
  }

  const subtractOne = (cartTitle: string) => {
    dispatch({ type: "SUBTRACT_ONE", payload: cartTitle })
  }
  return (
    <CounterContext.Provider value={{ cartItems, addOne, subtractOne }}>
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
