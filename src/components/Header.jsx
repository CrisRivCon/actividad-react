import '../styles/estilos.css';
import Logo from './Logo.jsx';
import Hamburguesa from '../assets/icon/menu-hamburguesa.svg';
import Carrito from './CarritoImg.jsx';
import { NavLink } from 'react-router-dom';

function Header({ carrito, setCarrito, cantidad, setCantidad }) {
  return (
    <header>
      <nav>
        <Logo />
        <div className="enlaces">
          <ul className="enlaces" id="menu">
            <NavLink className={({ isActive }) => isActive ? 'select' : ''} to="/">Inicio</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'select' : ''} to="tienda">Tienda</NavLink>
          </ul>
          <img
            className="icono-menu"
            id="abrir-menu"
            src={Hamburguesa}
            title="desplegar menú"
            alt="desplegar menú" />
          <Carrito cantidad={cantidad}
            setCantidad={setCantidad}
            carrito={carrito}
            setCarrito={setCarrito} />
        </div>
      </nav>
    </header>
  )
}

export default Header
