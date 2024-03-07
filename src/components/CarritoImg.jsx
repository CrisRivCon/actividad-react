import '../styles/estilos.css'
import CarritoImg from '../assets/icon/carrito.png'
import { useEffect, useState } from 'react'
const rutaServidor = 'http://localhost:8008/src/datos/getCarrito.php'


export default function Carrito() {
    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState('')

    useEffect(() => {
        fetch(rutaServidor)
            .then(response => {
                if (!response.ok) throw new Error('Algo ha ido mal.');
                return response;
            })
            .then(res => res.json())
            .then((articulosCarrito) => {
                setCarrito(articulosCarrito)
                setCantidad(Object.keys(carrito).length);
            })
            .catch(error => error);
    }, [])
    return (
        <div>
            <span className='numero-articulos'>{cantidad}</span>
            <a href="#">
                <img className="carrito" id="carrito" src={CarritoImg} />
            </a>
        </div>
    )
}