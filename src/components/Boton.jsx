import { Link } from 'react-router-dom';
import '../styles/estilos.css';


function Boton({ articulo, carrito, setCarrito, cantidad, setCantidad, tienda, texto, clases, url }) {

    function anyadir(articulo) {
        if (carrito.find(element => element.id === articulo.id)) {
            const articulos = carrito.map(elemento =>
                elemento.id === articulo.id
                    ? { ...elemento, cantidad: elemento.cantidad + 1 }
                    : elemento
            )
            setCarrito([...articulos])
        } else {
            setCarrito([...carrito, {...articulo, cantidad: 1}])
        }

        
        let total = carrito.reduce((acumulador, ele) => acumulador + ele.cantidad, 0)
        setCantidad(total)
        localStorage.setItem("carrito", JSON.stringify(carrito));
        
    }

    return (
        <>
            {
                tienda ? (
                    <button className="boton-tienda"
                        onClick={() => { anyadir(articulo) }}
                    >
                        <span className={clases}>{texto}</span>
                    </button >
                ) :
                    (
                        <Link to={url}>
                            <span className={clases}>{texto}</span>
                        </Link>
                    )
            }


        </>
    )

}

export default Boton