import '../styles/tienda.css'
import '../styles/estilos.css'
import Logo from '../components/Logo'
import Boton from './Boton'

export default function Card(props) {
    const { Nombre, Descripcion, Precio } = props;
    
    return (
        <div className="card">
            <h3 className='trunc'>{Nombre}</h3>
            <Logo />
            <p className="descripcion trunc">{Descripcion}
            </p>
            <p>{Precio}€</p>
            <Boton texto="Añadir al carrito" urls="/" clases="boton-primario" tienda={props}  />
        </div>
    )
}