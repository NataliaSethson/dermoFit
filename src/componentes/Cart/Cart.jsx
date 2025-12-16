import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';
import { BsCartXFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito, totalCantidad } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>

      <button className="cart-toggle-btn" onClick={() => setIsOpen(true)}>
        🛒 Carrito ({totalCantidad()})
      </button>


      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={() => setIsOpen(false)}></div>


      <div className={`sidebar-cart ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
        <h2 className="titleContainer">TU COMPRA:</h2>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Tu carrito está vacío 🛒</p>
            <Link
              to="/"
              className="btn btn-dark"
              onClick={() => setIsOpen(false)}
            >
              VOLVÉ A COMPRAR
            </Link>
          </div>
        ) : (
          <>
            {cart.map((prod) => (
              <div key={prod.id} className='cartConteiner'>
                <h3 className='nameCart'>{prod.name}</h3>
                <img src={prod.img} alt={prod.name} className='imgCart'></img>
                <small className='priceUni'>Precio unitario:
                  {(prod.price).toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </small>
                <small>Cantidad: {prod.cantidad}</small>
                <p className='priceTot'>Precio total:
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
            ))}

            <p className='totalCompra'>
              Total compra: {(totalCompra()).toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>

            <div className="botonesCart">
              <button onClick={vaciarCarrito} className='btn btn-danger'>VACIAR CARRITO</button>
              <Link
                className='btn btn-dark'
                to={"/CheckOut"}
                onClick={() => setIsOpen(false)}
              >
                TERMINAR COMPRA
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
