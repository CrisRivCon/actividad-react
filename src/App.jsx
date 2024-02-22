import React from 'react'
import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import Tienda from './pages/Tienda.jsx'
import './styles/estilos.css'
import Footer from './components/Footer.jsx'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {

  return (
  <React.StrictMode>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/tienda" element={<Tienda/>}/>
      </Routes>
    </Router>
    <Footer/>
  </React.StrictMode>
  )
}

