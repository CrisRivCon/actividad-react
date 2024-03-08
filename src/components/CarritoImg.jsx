import '../styles/estilos.css'
import CarritoImg from '../assets/icon/carrito.png'


export default function Carrito({carrito, setCarrito, cantidad, setCantidad}) {

    return (
        <div>
            <span className='numero-articulos'>{cantidad}</span>
            <a href="/carrito">
                <img className="carrito" id="carrito" src={CarritoImg} />
            </a>
        </div>
    )
}