import { useContext } from 'react'
import { CartContext } from '../context/context'

function RemoveButton() {
  const { removeLastItem } = useContext(CartContext)

  const handleRemoveLastItem = () => {
    removeLastItem()
  }

  return (
    <button
      className="bg-red-400 hover:bg-red-500 p-2 text-white m-2"
      onClick={handleRemoveLastItem}
    >
      Remover Item
    </button>
  )
}

export default RemoveButton
