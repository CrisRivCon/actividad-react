import React, { useEffect, useState } from 'react'
import '../styles/estilos.css'
import '../styles/tienda.css'
import Card from '../components/CardTienda'
// https://fakestoreapi.com/


export default function HomePage() {

  const [articulos, setArticulos] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
        .then(response => {
            if (!response.ok) throw new Error('Algo ha ido mal.');
            return response;
        })
        .then(res => res.json())
        .then((articulos) => {
            setArticulos(articulos)
          })
          .catch(error => console.log(error));
      }, [])

    return (
        <main>
            <section id="seccion-3-colabora" className="seccion-3 fondo-seccion-3">
                <div className="texto-secc-3">
                    <h2>Colabora</h2>
                </div>
                <div className="cards">
                    {articulos.map((articulo) => <Card key={articulo.id}
                                                        Codigo={articulo.id}
                                                        Nombre={articulo.title}
                                                        Descripcion={articulo.description}
                                                        Precio={articulo.price} />)}
                </div>
            </section>
        </main>

    )
}
