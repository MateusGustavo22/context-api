import { ReactNode, createContext, useState } from 'react'

type CartContextType = {
  team: string
  size: string
  price: string
}

export const CartContext = createContext<{
  cartItems: CartContextType[]
  addToCart: (item: CartContextType) => void
  removeLastItem: () => void
}>({
  cartItems: [],
  addToCart: () => {},
  removeLastItem: () => {},
})

interface CartProviderProps {
  children: ReactNode
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartContextType[]>([
    {
      team: 'Barcelona',
      size: 'M',
      price: 'R$ 150,00',
    },
    {
      team: 'Real Madrid',
      size: 'M',
      price: 'R$ 145,00',
    },
    {
      team: 'Liverpool',
      size: 'M',
      price: 'R$ 130,00',
    },
    {
      team: 'Manchester City',
      size: 'M',
      price: 'R$ 125,00',
    },
  ])

  const addToCart = (item: CartContextType) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const removeLastItem = () => {
    setCartItems((prevItems) => {
      console.log(prevItems)
      if (prevItems.length === 0) return prevItems

      const newItems = [...prevItems]
      newItems.pop()
      return newItems
    })
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeLastItem }}>
      {children}
    </CartContext.Provider>
  )
}
