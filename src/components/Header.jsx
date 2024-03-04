import '../styles/estilos.css'

import Logo from './Logo.jsx'
import Hamburguesa from '../assets/icon/menu-hamburguesa.svg'
import Temas from './CambioColores.jsx'
import Carrito from './CarritoImg.jsx'

function Header() {
  return (
      <header>
        <nav>
            <Logo/>
            <div className="enlaces">
                <ul className="enlaces" id="menu">
                    <li className="select">
                        <a href="/" aria-current="page"> Inicio </a>
                    </li>
                    <li>
                        <a href="/tienda">Tienda</a></li>
                    <li>
                        <Temas/>
                    </li>

                </ul>
                <img 
                    className="icono-menu" 
                    id="abrir-menu" 
                    src={Hamburguesa}
                    title="desplegar menú"
                    alt="desplegar menú"/>
                    <Carrito/>
            </div>
        </nav>
    </header>
  )
}

export default Header
