import { useState, useEffect, useContext } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { CartContext } from '../../context/CartContext';


initMercadoPago('APP_USR-2093c6b0-74c6-4891-bb71-141e48e65fdc');

const MercadoPagoConfig = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const { totalCompra } = useContext(CartContext);

  useEffect(() => {

    const createPreference = async () => {
      try {
        const response = await fetch("https://dermofit.onrender.com/create_preference", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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

    if (totalCompra > 0) {
      createPreference();
    }
  }, [totalCompra]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '250px' }}>
      <h3 style={{ fontSize: '70px', fontWeight: 'lighter' }}>Resumen de tu pedido</h3>
      <p style={{ fontSize: '30px', marginTop: '30px', fontWeight: 'lighter', marginBottom: '50px' }}>Total a pagar: <strong>${totalCompra}</strong></p>

      { }
      {!preferenceId ? (
        <p>Cargando plataforma de pago...</p>
      ) : (
        <div id="wallet_container" style={{ width: '700px', height: '500px' }}>
          <Wallet
            initialization={{ preferenceId: preferenceId }}
            customization={{ texts: { valueProp: 'smart_option' } }}
          />
        </div>
      )}
    </div>
  );
};

export default MercadoPagoConfig;


