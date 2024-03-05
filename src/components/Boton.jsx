import { useState } from 'react';
import '../styles/estilos.css'
import setCookie from './SetCookies';
import getValueCookie from './GetCookies';

function Boton(props) {
    const {texto, url, clases, tienda} = props;
    const [carrito, setCarrito] = useState("");

    function anyadir() {
        if (tienda) {
            const articulo = props.tienda;
            const {Codigo} = articulo;
            let objetoCarrito = {};

            if (getValueCookie("carrito")) {
                objetoCarrito = JSON.parse(getValueCookie("carrito"));
                console.log("objetoCarrito" , objetoCarrito);
                objetoCarrito[Codigo] = objetoCarrito[Codigo] + 1;
                setCarrito(JSON.stringify(objetoCarrito));

                console.log(carrito, 'Existe carrito');
            } else {
                objetoCarrito[Codigo] = 1;
                setCarrito(JSON.stringify(objetoCarrito));
            }
            
            setCookie("carrito", carrito, 30);
        }
    }

    return (
        <a href={url} className={tienda ? "boton-tienda" : ""} onClick={anyadir}>
            <span className={clases}>{texto}</span>
        </a>
    )
}

export default Boton