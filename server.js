import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { MercadoPagoConfig, Order } from 'mercadopago';

const app = express();
app.use(cors());
app.use(express.json());

// Configurar Access Token
const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESS_TOKEN,
  options: { timeout: 5000 },
});

// Inicializar el objeto API
const order = new Order(client);

// Endpoint de prueba
app.get("/", (req, res) => {
  res.send("Servidor Dermofit funcionando");
});

// Iniciar servidor
app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));





