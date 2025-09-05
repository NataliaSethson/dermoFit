import { Link, useNavigate } from "react-router-dom"
import Counter from "../Counter/Counter"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({ item }) => {
      const [cantidad, setCantidad] = useState(1)
      const navigate = useNavigate()
      const { agregarAlCarrito, isInCart } = useContext(CartContext)

      const handleVolver = () => {
            navigate(-1)
      }

      const handleAgregar = () => {
            const newItem = {
                  ...item,
                  cantidad
            }
            agregarAlCarrito(newItem)
      }

      return (

            <div className="cardConteiner">
                  <img className='imgItem' src={item.img} alt={item.name} />
                  <h3 className='nameTitle'>{item.name}</h3>
                  <p className='description'>{item.description}</p>
                  <p className='price'>Precio:{item.price.toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                  })}</p>
                  <br></br>


                  {
                        isInCart(item.id)
                              ? <Link to={"/cart"} className="btn btn-dark"> TERMINAR MI COMPRA</Link>
                              : <Counter
                                    max={item.stock}
                                    cantidad={cantidad}
                                    setCantidad={setCantidad}
                                    handleAgregar={handleAgregar} />

                  }

                  <br></br>

                  <button className="btn btn-dark" onClick={handleVolver}> VOLVER</button>


            </div>

      )
}

export default ItemDetail