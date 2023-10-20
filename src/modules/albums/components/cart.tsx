import * as React from "react"
import { useCounterContext } from "../../../context/counter.context"
import CartCard from "./cart-card"

const Cart: React.FC<React.PropsWithChildren> = () => {
  const { cartItems } = useCounterContext()
  return (
    <div className="border-2 h-screen w-72 py-8 px-4 flex flex-col  items-center">
      <h2 className="text-2xl">Carrinho</h2>
      {cartItems.map((item) => (
        <CartCard
          key={item.image}
          title={item.title}
          qty={item.qty}
          image={item.image}
        />
      ))}
    </div>
  )
}

export default Cart
