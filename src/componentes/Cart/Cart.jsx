import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';
import { BsCartXFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    cart,
    totalCompra,
    vaciarCarrito,
    eliminarDelCarrito,
    isCartOpen,
    setIsCartOpen
  } = useContext(CartContext);

  return (
    <>
      <div
        className={`overlay ${isCartOpen ? 'show' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />

      <div className={`sidebar-cart ${isCartOpen ? 'open' : ''}`}>
        <button
          className="close-btn"
          onClick={() => setIsCartOpen(false)}
        >
          ×
        </button>

        <h2 className="titleContainer">TU COMPRA:</h2>

        <div className="cart-content">
          {cart.length === 0 && (
            <div className="empty-cart">
              <p>Tu carrito está vacío 🛒</p>
              <Link
                to="/items"
                className="btn btn-dark"
                onClick={() => setIsCartOpen(false)}
              >
                VOLVÉ A COMPRAR
              </Link>
            </div>
          )}

          {cart.map(prod => (
            <div key={prod.id} className="cartConteiner">
              <h3 className="nameCart">{prod.name}</h3>

              <small className="priceUni">
                Precio unitario:{' '}
                {prod.price.toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                  maximumFractionDigits: 0
                })}
              </small>

              <small>Cantidad: {prod.cantidad}</small>

              <p className="priceTot">
                Precio total:{' '}
                {(prod.price * prod.cantidad).toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                  maximumFractionDigits: 0
                })}
              </p>

              <button
                onClick={() => eliminarDelCarrito(prod.id)}
                className="btn btn-danger"
              >
                <BsCartXFill />
              </button>
            </div>
          ))}

          {cart.length > 0 && (
            <>
              <p className="totalCompra">
                Total compra:{' '}
                {totalCompra.toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                  maximumFractionDigits: 0
                })}
              </p>

              <div className="botonesCart">
                <Link
                  className="btn btn-dark"
                  to="/items"
                  onClick={() => setIsCartOpen(false)}
                >
                  AGREGAR MÁS PRODUCTOS
                </Link>

                <button
                  onClick={vaciarCarrito}
                  className="btn btn-danger"
                >
                  VACIAR CARRITO
                </button>

                <Link
                  className="btn btn-dark"
                  to="/CheckOut"
                  onClick={() => setIsCartOpen(false)}
                >
                  TERMINAR COMPRA
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
