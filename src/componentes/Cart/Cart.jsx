import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css'
import { BsCartXFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)


   const navigate = useNavigate(); 
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  return (
    <div>
      <h2 className="titleContainer">TU COMPRA:</h2>

      <br></br>
      {
        cart.map((prod) => (

          <div key={prod.id} className='cardConteiner'>
            <h3 className='nameCart'>{prod.name}</h3>
            <img src={prod.img} alt={prod.name} className='imgCart'></img>
            <small className='priceUni'>Precio unitario: 
              {(prod.price).toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}</small>
            <small>Cantidad: {prod.cantidad}</small>
            <p className='priceTot'> Precio total:
             {(prod.price * prod.cantidad).toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
            </p>

            <button onClick={() => eliminarDelCarrito(prod.id)} className='btn btn-danger'>
              <BsCartXFill />
            </button>

          </div>
        )
        )
      }

      <p className='totalCompra'>
              Total compra :{(totalCompra()).toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}</p>
      <br></br>
      <div className="botonesCart">
        <button onClick={vaciarCarrito} className='btn btn-danger'>VACIAR CARRITO</button>
        <Link className='btn btn-dark' to={"/CheckOut"}>TERMINAR COMPRA</Link>
      </div>
    </div>
  )
}

export default Cart