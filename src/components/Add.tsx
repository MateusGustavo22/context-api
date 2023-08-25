import { useContext } from 'react'
import { CartContext } from '../context/context'

function AddButton() {
  const { addToCart } = useContext(CartContext)

  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 p-2 text-white m-2"
      onClick={() =>
        addToCart({
          team: 'Chelsea',
          size: 'G',
          price: 'R$ 96,00',
        })
      }
    >
      Adicionar Item
    </button>
  )
}

export default AddButton
