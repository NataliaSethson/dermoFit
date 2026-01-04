
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <div>
        <h1 className='title'>
          <Link to={"/"}>
            <img src='/log.png' className='logo' alt='' />
          </Link>
        </h1>
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
          <li>
            <Link to='/nosotros'>NOSOTROS</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;