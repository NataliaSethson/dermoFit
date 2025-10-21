import { useEffect } from "react";

const MercadoPago = ({ cart }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const mp = new window.MercadoPago("APP_USR-2093c6b0-74c6-4891-bb71-141e48e65fdc", { locale: "es-AR" });

      fetch("http://localhost:3000/create_preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map(item => ({
            name: item.name,
            price: item.price,
            cantidad: item.cantidad || item.quantity || 1,
          })),
        }),
      })
        .then(res => res.json())
        .then(data => {
          mp.checkout({
            preference: { id: data.id },
            render: { container: ".cho-container", label: "Pagar" },
          });
        })
        .catch(err => console.error(err));
    };

    return () => document.body.removeChild(script);
  }, [cart]);

  return <div className="cho-container"></div>;
};

export default MercadoPago;


