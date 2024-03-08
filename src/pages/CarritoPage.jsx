import '../styles/estilos.css'
import '../styles/tienda.css'
import Card from '../components/CardTienda'
// https://fakestoreapi.com/


export default function HomePage({articulos, setArticulos, cantidad, setCantidad, carrito, setCarrito}) {

    return (
        <main>
            <section id="seccion-3-colabora" className="seccion-3 fondo-seccion-3">
                <div className="texto-secc-3">
                    <h2>Carrito</h2>
                </div>
                <div className="cards">
                    {carrito.map((articulo) => <Card key={articulo.id}
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
