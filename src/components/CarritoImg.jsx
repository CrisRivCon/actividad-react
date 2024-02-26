import '../styles/estilos.css'
import CarritoImg from '../assets/icon/carrito.png'
import getValueCookie from './GetCookies';

export default function Carrito() {
    const cantidad = getValueCookie('cantidad');

    return (
        <div>
            <span className='numero-articulos'>{cantidad}</span>
            <a href="#">
                <img className="carrito" id="carrito" src={CarritoImg}/>
            </a>
        </div>
    )
}