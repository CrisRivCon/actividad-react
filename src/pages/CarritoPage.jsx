import Boton from '../components/Boton';
import '../styles/estilos.css';
import '../styles/tienda.css';
// https://fakestoreapi.com/

export default function CarritoPage({ setCantidad, carrito, setCarrito }) {
    let cesta = JSON.parse(localStorage.getItem("carrito"))
    let total = 0;
    if (cesta) {
        total = cesta.reduce((acumulador, ele) => acumulador + (ele.price * ele.cantidad), 0).toFixed(2)
    }

    const vaciarCarrito = () => {
        setCarrito([])
        localStorage.removeItem("carrito")
        setCantidad(0)
    }


    return (
        <main id="blog" className="seccion-1">
            <section className="blog">
                <div className="titulo-blog">
                    <h1>Carrito</h1>
                </div>

                {cesta ?
                    cesta.map(articulo =>
                        <div className="destacado" key={articulo.id}>
                            <div className="texto-articulo ">

                                <h2 className='trunc texto-carrito'>{articulo.title}</h2>
                                <div>
                                    <p className="texto-largo trunc texto-carrito">Descripción: {articulo.description}</p>
                                </div>
                                <div>
                                    <p><strong>Cantidad: </strong>{articulo.cantidad}</p>
                                    <p><strong>Precio: </strong>{(articulo.price * articulo.cantidad).toFixed(2)}€</p>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    <div className="destacado">
                        <div className="texto-articulo ">

                            <h2>No hay artículos en el carrito</h2>

                        </div>
                    </div>
                }
                <div className="destacado">
                    <div className="texto-articulo ">
                        <h2>Total carrito: {total}€</h2>
                        <div className='botones'>
                            <Boton texto="Comprar" url="" clases="boton-primario" />
                            <div onClick={vaciarCarrito}>
                                <Boton texto="Vaciar" url="" clases="boton-secundario" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>

    )
}
