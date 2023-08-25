import { useContext } from 'react'
import { CartContext } from '../context/context'
import RemoveButton from './RemoveButton'
import AddButton from './Add'

export default function Cart() {
  const { cartItems } = useContext(CartContext)

  return (
    <>
      <div className="w-[300px] h-max flex gap-3 flex-col bg-slate-300 p-3 rounded-xl justify-center">
        {cartItems.map((item) => (
          <Item
            key={item.team}
            team={item.team}
            size={item.size}
            price={item.price}
          />
        ))}
      </div>
      <AddButton />
      <RemoveButton />
    </>
  )
}

type CartContextType = {
  team: string
  size: string
  price: string
}

export function Item({ team, size, price }: CartContextType) {
  return (
    <div className="w-full h-max bg-white flex flex-col p-2 rounded-xl">
      <span className="font-semibold text-gray-700 text-3xl">{team}</span>
      <span className="font-semibold text-gray-500 text-base">
        Tamanho: {size}
      </span>
      <span className="font-semibold text-green-600 text-base">{price}</span>
    </div>
  )
}
