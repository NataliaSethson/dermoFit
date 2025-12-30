import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {
  MercadoPagoConfig,
  Preference
} from 'mercadopago';

const app = express();
app.use(cors());
app.use(express.json());

const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESS_TOKEN,
});

app.post("/create_preference", async (req, res) => {
  try {
    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [{
          title: req.body.title,
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),
          currency_id: 'ARS'
        }],
        back_urls: {
          success: "https://dermofit.netlify.app",
          failure: "https://dermofit.netlify.app",
          pending: "https://dermofit.netlify.app",
        },

        auto_return: "approved",
      }
    });

    console.log("Preferencia creada exitosamente ID:", result.id);
    res.json({
      id: result.id
    });

  } catch (error) {
    console.error("Error detallado de Mercado Pago:", error);
    res.status(500).json({
      error: "Error al crear la preferencia",
      details: error.message
    });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));