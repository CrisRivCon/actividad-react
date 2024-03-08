import '../styles/estilos.css'


function Boton({articulo, carrito, setCarrito, cantidad, setCantidad, tienda, texto, clases}) {
    function anyadir(articulo) {
        setCarrito([...carrito, articulo])
        setCantidad(carrito.length)
    }
    return (
        <button className={tienda ? "boton-tienda" : ""}
                onClick={tienda ? () => { anyadir(articulo) } : ""}
        >
            <span className={clases}>{texto}</span>
        </button>
    )
}

export default Boton