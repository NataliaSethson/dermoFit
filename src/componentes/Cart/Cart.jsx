import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css'
import { BsCartXFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Cart = () => {
    const  { cart, totalCompra,vaciarCarrito,eliminarDelCarrito }=useContext( CartContext)


  return (
    <div>
      <h2 className="titleContainer">TU COMPRA:</h2>
    
      <br></br>
      {
        cart.map((prod)=>(
          
          <div key={prod.id} className='cardConteiner'>
          <h3 className='nameTitle'>{prod.name}</h3>
          <img src={prod.img}alt={prod.name} className='imgItem'></img>
          <small>Precio unitario : ${prod.price}</small>
          <small>Cantidad: {prod.cantidad}</small>
          <p>Precio total: ${prod.price*prod.cantidad}</p>
          <button onClick={()=>eliminarDelCarrito(prod.id)} className='btn btn-danger'>
            <BsCartXFill />
          </button>

          </div>
        )
        )
      }
      
      <p className='totalCompra'>Total compra :${ totalCompra() }</p>
      <br></br>
      <div className="botonesCart">
      <button onClick= {vaciarCarrito} className='btn btn-danger'>VACIAR CARRITO</button>
      <Link className='btn btn-dark'to={"/CheckOut"}>TERMINAR COMPRA</Link>
      </div>
    </div>
  )
}

export default Cart