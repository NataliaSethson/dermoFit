import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Header = () => {
  const { totalCantidad, setIsCartOpen } = useContext(CartContext)

  return (
    <header>
      <button
        className="cart-toggle-btn"
        onClick={() => setIsCartOpen(true)}
      >
        🛒 Carrito {totalCantidad > 0 && `(${totalCantidad})`}
      </button>
    </header>
  )
}

export default Header
