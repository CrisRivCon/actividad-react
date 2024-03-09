import '../styles/tienda.css';
import '../styles/estilos.css';
import Boton from './Boton';

export default function Card({ articulo, cantidad, setCantidad, carrito, setCarrito }) {
    return (
        <div className="card">
            <h3 className='trunc'>{articulo.title}</h3>
            <img href={articulo.image}/>
            <p className="descripcion trunc">{articulo.description}
            </p>
            <p>{articulo.price}€</p>

            <Boton texto="Añadir al carrito"
                clases="boton-primario"
                tienda
                articulo={articulo}
                cantidad={cantidad}
                setCantidad={setCantidad}
                carrito={carrito}
                setCarrito={setCarrito} />
        </div>
    )
}