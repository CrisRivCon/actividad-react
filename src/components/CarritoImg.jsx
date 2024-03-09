import '../styles/estilos.css'
import CarritoImg from '../assets/icon/carrito.png'
import { Link } from 'react-router-dom';

export default function Carrito({carrito, setCarrito, cantidad, setCantidad}) {
  
    return (
        <div>
            <span className='numero-articulos'>{cantidad}</span>
            <Link to="/carrito">
                <img className="carrito" id="carrito" src={CarritoImg} />
            </Link>
        </div>
    )
}