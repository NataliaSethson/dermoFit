import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from "./componentes/NavBar/NavBar"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './componentes/Cart/Cart';
import CheckOut from './componentes/CheckOut/CheckOut';
import Footer from './componentes/Footer/Footer';
import Inicio from './componentes/Inicio/Inicio';
import Nosotros from './componentes/Nosotros/Nosotros';
import Header from './componentes/Header/Header';
import MercadoPagoConfig from './componentes/MercadoPagoConfig/MercadoPagoConfig';




function App() {

  return (
    <div className="divContainer">
      <BrowserRouter>
        <CartProvider>
          <Header></Header>
          <NavBar></NavBar>
          <Cart></Cart>
          <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/items' element={<ItemListContainer />} />
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/items/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route path="/checkout-pago" element={<MercadoPagoConfig/>} />
            <Route path='/checkOut' element={<CheckOut />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
          <Footer></Footer>
        </CartProvider>


      </BrowserRouter>

    </div>
  )
}

export default App
