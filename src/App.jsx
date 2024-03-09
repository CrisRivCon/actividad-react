import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import Tienda from './pages/Tienda.jsx';
import CarritoPage from './pages/CarritoPage.jsx';
import './styles/estilos.css';
import Footer from './components/Footer.jsx';
import  {Routes, Route} from 'react-router-dom';



export default function App() {
  let cesta = [];

  if (localStorage.getItem("carrito")) {
    cesta = JSON.parse(localStorage.getItem("carrito"))
  }
  const [carrito, setCarrito] = useState(cesta)
  const [cantidad, setCantidad] = useState(cesta.length)
  const [articulos, setArticulos] = useState([])

 // Asincronía con Fetch
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
          // Manejo de errores con catch
        .catch(error => console.log(error));
      },[])
      
  return (
    <>
    <Header cantidad={cantidad}
            setCantidad={setCantidad}
            carrito={carrito}
            setCarrito={setCarrito}/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route  path="/tienda" 
                element={<Tienda  articulos={articulos}
                                  setArticulos={articulos}
                                  cantidad={cantidad}
                                  setCantidad={setCantidad}
                                  carrito={carrito}
                                  setCarrito={setCarrito}
                            />}
        />
        <Route path="/carrito" element={<CarritoPage carrito={carrito}
                                                      setCarrito={setCarrito}
                                                      setCantidad={setCantidad}/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

