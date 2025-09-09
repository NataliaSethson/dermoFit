import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <div>
        <h1 className='title'>
         <Link to={"/"}>DERMOFIT</Link>
        </h1>
        <CartWidget />
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>INICIO</Link>
          </li>
          <li>
            <Link to='/items/productos'>PRODUCTOS</Link>
          </li>
          <li>
            <Link to='/items/servicios'>SERVICIOS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;