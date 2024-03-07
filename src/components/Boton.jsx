import { useState } from 'react';
import '../styles/estilos.css'
const rutaServidor = 'http://localhost:8008/src/datos/carrito.php'

function anyadir(codigo) {
    fetch(`${rutaServidor}?id=${codigo}`)
        .then(response => {
            if (!response.ok) throw new Error('Error');
            return response;
        })
        .then(response => response.json())
        .catch(error => console.log(error));
}

function Boton(props) {
    const { texto, url, clases, tienda } = props;
    const { Codigo } = tienda.Codigo;

    return (
        <button href={url}
            className={tienda ? "boton-tienda" : ""}

            onClick={tienda ? () => { anyadir(Codigo) } : ""}>
            <span className={clases}>{texto}</span>
        </button>
    )
}

export default Boton