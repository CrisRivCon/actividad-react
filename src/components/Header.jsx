import '../styles/estilos.css'

import Logo from './Logo.jsx'
import Hamburguesa from '../assets/icon/menu-hamburguesa.svg'
import Temas from './CambioColores.jsx'
import Boton from './Boton.jsx'

function Header() {
  return (
    <>
      <header>
        <nav>
            <Logo/>
            <div className="enlaces">
                <ul className="enlaces" id="menu">
                    <li className="select">
                        <a  href="#" 
                            aria-current="page">
                            Inicio
                        </a>
                    </li>
                    <li><a href="src/quienes-somos.html">Quienes somos</a></li>
                    <li><a href="src/contacto.html">Contacto</a></li>
                    <li><a href="src/blog.html">Blog</a></li>
                    <li>
                        <Temas/>
                    </li>
                    <li className="boton-colabora-menu">
                        <Boton texto="COLABORA" url="#seccion-3-colabora" clases="boton-secundario boton-nav"/>
                    </li>
                </ul>
                <img 
                    className="icono-menu" 
                    id="abrir-menu" 
                    src={Hamburguesa}
                    title="desplegar menú"
                    alt="desplegar menú"/>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header
