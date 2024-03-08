import React, { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import Tienda from './pages/Tienda.jsx'
import CarritoPage from './pages/CarritoPage.jsx'
import './styles/estilos.css'
import Footer from './components/Footer.jsx'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {
  const [carrito, setCarrito] = useState([])
  const [cantidad, setCantidad] = useState(0)
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
  <React.StrictMode>
    <Header cantidad={cantidad}
            setCantidad={setCantidad}
            carrito={carrito}
            setCarrito={setCarrito}/>
    <Router>
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
                                                      setCarrito={setCarrito}/>}/>
      </Routes>
    </Router>
    <Footer/>
  </React.StrictMode>
  )
}

