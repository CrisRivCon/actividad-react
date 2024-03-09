import '../styles/estilos.css';
import '../styles/tienda.css';
import Card from '../components/CardTienda';
import { Link } from 'react-router-dom';
// https://fakestoreapi.com/

export default function HomePage({articulos, setArticulos, cantidad, setCantidad, carrito, setCarrito}) {
    
    return (
        <main>
            <section id="seccion-3-colabora" className="seccion-3 fondo-seccion-3">
                <div className="texto-secc-3">
                    <h2>Colabora </h2>
                    <Link to="https://fakestoreapi.com/"> Fakestoreapi</Link>
                </div>
                <div className="cards">
                    {articulos.map((articulo) => <Card key={articulo.id}
                                                        articulo={articulo}
                                                        cantidad={cantidad}
                                                        setCantidad={setCantidad}
                                                        carrito={carrito}
                                                        setCarrito={setCarrito}
                                                />)}
                </div>
            </section>
        </main>

    )
}
