import React from 'react'
import '../styles/estilos.css'
import '../styles/tienda.css'
import Card from '../components/CardTienda'
import Articulos from '../datos//articulos.json'

export default function HomePage() {
    const articulos = Articulos.articulos;
  return (
      <main>
         <section id="seccion-3-colabora" className="seccion-3 fondo-seccion-3">
            <div className="texto-secc-3">
                <h2>Colabora</h2>
            </div>
            <div className="cards">
                {articulos.map((articulo) => <Card Nombre={articulo.nombre} 
                                                    Descripcion={articulo.descripcion}
                                                    Precio={articulo.precio}/>)}
            </div>     
        </section>
      </main>

  )
}
