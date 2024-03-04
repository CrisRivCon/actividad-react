import { useState } from 'react';
import '../styles/estilos.css'
import setCookie from './SetCookies';
import getValueCookie from './GetCookies';

function Boton(props) {
    const {texto, url, clases, tienda} = props;


    function anyadir() {
        if (tienda) {
            const articulo = props.tienda;
            const {Codigo} = articulo;
            const [carrito, setCarrito] = useState("");
            let objetoCarrito = {};

            if (getValueCookie("carrito")) {
                setCarrito(JSON.parse(getValueCookie("carrito")))
                console.log(carrito);
            } else {
                objetoCarrito[Codigo] = 1;
                setCarrito(JSON.stringify(objetoCarrito));
                setCookie('carrito', carrito, 30);
                console.log(carrito);
            }
            
            setCookie(Codigo, Number(valor) + 1, 30);
        }
    }

    return (
        <a href={url} className={tienda ? "boton-tienda" : ""} onClick={anyadir}>
            <span className={clases}>{texto}</span>
        </a>
    )
}

export default Boton