import '../styles/estilos.css'
import CarritoImg from '../assets/icon/carrito.png'

export default function Carrito() {

    return (
        <div>
            <span className='numero-articulos'>{cantidad}</span>
            <a href="#">
                <img className="carrito" id="carrito" src={CarritoImg}/>
            </a>
        </div>
    )
}