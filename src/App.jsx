import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from "./componentes/NavBar/NavBar"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './componentes/Cart/Cart';
import CheckOut from './componentes/CheckOut/CheckOut';




function App() {


  return (
   <div className="divContainer">
     <BrowserRouter>
     <CartProvider>
     <NavBar></NavBar>
     <Routes>
    <Route path='/'element ={<ItemListContainer/>}/>
    <Route path='/items/:categoryId' element={<ItemListContainer/>}/>
    <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
    <Route path='/cart' element ={<Cart/>}/>
    <Route path='/checkOut'element ={<CheckOut/>}/>
    <Route path='*' element={<Navigate to="/"/>} />
     </Routes>
    </CartProvider>
     
    
     </BrowserRouter>

   </div>
  )
  }

export default App
