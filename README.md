# 🛍️ Dermofit

**Dermofit** es una **simulación de un comercio electrónico** desarrollada con **React**, **CSS3** y **JavaScript**.  
El proyecto permite visualizar productos, realizar compras simuladas y gestionar órdenes, integrando una base de datos en tiempo real mediante **Firebase**.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React** — Librería principal para la interfaz de usuario  
- 💅 **CSS3** — Estilos personalizados  
- 🧱 **React-Bootstrap** — Componentes UI modernos y responsivos  
- 📝 **Formik** — Gestión y validación de formularios  
- 🔔 **SweetAlert** — Notificaciones elegantes e interactivas  
- 🔥 **Firebase** — Base de datos en tiempo real (productos y órdenes)  
- ⚡ **Vite** — Entorno de desarrollo rápido con Hot Module Replacement  

---

## 📸 Características principales

- 🛒 Catálogo de productos cargado desde **Firebase**  
- 🧾 Detalle de producto con descripción e imagen  
- 🛍️ Carrito de compras funcional  
- 📦 Registro de órdenes en **Firebase**  
- ✉️ Formularios validados con **Formik** y alertas con **SweetAlert**  
- 🎨 Diseño responsive y moderno con **React-Bootstrap**

---

## 📂 Estructura del proyecto

dermofit/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── pages/
│ ├── context/
│ ├── firebase/
│ ├── App.jsx
│ └── main.jsx
├── package.json
└── vite.config.js


---

## ⚙️ Instalación y uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/NataliaSethson/dermoFit.git
   cd dermofit


2. **Instalar dependencias**

npm install

3. ## ⚙️ Configurar Firebase

Crea un archivo `src/firebase/config.js` y agrega tu configuración:

```javascript
export const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};



4. ## 🚀 Ejecutar el proyecto


npm run dev


5. ## 🌐 Abrir en el navegador 
   [http://localhost:5173](http://localhost:5173)




 ## 🧠 Futuras mejoras

 -Autenticación de usuarios con Firebase Auth

 -Panel de administración para productos y órdenes

 -Integración de pasarela de pagos

 -Filtros y búsqueda avanzada de productos


 ## 💌 Contacto

 Autora: Natalia Sethson
📧 [nataliasethson@live.com.ar]




