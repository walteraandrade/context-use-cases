import React from "react"

interface CartCardProps {
  image: string
  title: string
  qty: number
}
const CartCard: React.FC<CartCardProps> = (props) => {
  return (
    <div className="flex gap-2 items-center border-2 rounded px-4 py-2 w-full justify-between">
      <img src={props.image} className="h-[30px] w-[30px]" />
      <h3 className="font-lg">{props.title}</h3>
      <p>{props.qty}</p>
    </div>
  )
}

export default CartCard
