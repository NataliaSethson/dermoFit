import { Link, useNavigate } from "react-router-dom"
import Counter from "../Counter/Counter"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import Button from 'react-bootstrap/Button';
import './ItemDetail.css'


const ItemDetail = ({ item }) => {
      const [cantidad, setCantidad] = useState(1)
      const navigate = useNavigate()
      const { agregarAlCarrito, isInCart,  setIsCartOpen } = useContext(CartContext)

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

      const handleTerminarCompra =()=>{
            setIsCartOpen(true)
      }

      return (

            <div className="cardConteiner">
                  <img className='imgDetail' src={item.img} alt={item.name} />
                  <h3 className='nameDetail'>{item.name}</h3>
                  <p className='description'>{item.description}</p>
                  <p className='price'>
                        Precio:{item.price.toLocaleString("es-AR", {
                              style: "currency",
                              currency: "ARS",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                        })}</p>
                  <br></br>


                  {
                        isInCart(item.id)
                              ? <Link to={"/cart"} className="btn btn-dark" onClick={handleTerminarCompra}> TERMINAR MI COMPRA</Link>
                              : <Counter
                                    max={item.stock}
                                    cantidad={cantidad}
                                    setCantidad={setCantidad}
                                    handleAgregar={handleAgregar} />

                  }

                  <br></br>

                  <Button variant="outline-secondary" onClick={handleVolver}>VOLVER</Button>


            </div>

      )
}

export default ItemDetail