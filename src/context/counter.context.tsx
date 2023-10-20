import * as React from "react"

interface CounterContextProps {
  counter: number
  addOne: () => void
  substractOne: () => void
}
const CounterContext = React.createContext<CounterContextProps | null>(null)

export function CounterContextProvider({ children }: React.PropsWithChildren) {
  const [count, setCount] = React.useState(0)

  const addOne = () => {
    setCount((prev) => prev++)
  }

  const substractOne = () => {
    setCount((prev) => prev - 1)
  }
  return (
    <CounterContext.Provider value={{ counter: count, addOne, substractOne }}>
      {children}
    </CounterContext.Provider>
  )
}
