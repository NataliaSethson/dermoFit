import { useState, useEffect, useContext } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { CartContext } from '../../context/CartContext';
import './MercadoPagoConfig.css';

initMercadoPago('APP_USR-2093c6b0-74c6-4891-bb71-141e48e65fdc');

const MercadoPagoConfig = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const { totalCompra } = useContext(CartContext);

  useEffect(() => {
    const createPreference = async () => {
      try {
        const response = await fetch("https://dermofit.onrender.com/create_preference", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: "Producto DermoFit",
            quantity: 1,
            price: totalCompra
          }),
        });
        const data = await response.json();
        setPreferenceId(data.id);
      } catch (error) {
        console.error("Error en la compra:", error);
      }
    };

    if (totalCompra > 0) { createPreference(); }
  }, [totalCompra]);

  return (
    <div className="mp-container">
      <h3 className="mp-title">Resumen de tu pedido</h3>
      <p className="mp-total">
        Total a pagar: <strong>${totalCompra.toLocaleString("es-AR")}</strong>
      </p>

      {!preferenceId ? (
        <p className="mp-loading">Cargando plataforma de pago...</p>
      ) : (
        <div id="wallet_container" className="wallet-wrapper">
          <Wallet
            initialization={{ preferenceId: preferenceId }}
          />
        </div>
      )}
    </div>
  );
};

export default MercadoPagoConfig;

