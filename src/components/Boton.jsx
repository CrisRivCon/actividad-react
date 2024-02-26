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
            let valor = 0;

            if (getValueCookie(Codigo)) {
                valor = getValueCookie(Codigo);
            } else {
                let cantidad = getValueCookie('cantidad') ? Number(getValueCookie('cantidad')) + 1 : 1;
                setCookie('cantidad', cantidad, 30);
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