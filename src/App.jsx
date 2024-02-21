import React from 'react'
import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import './styles/estilos.css'
import Footer from './components/Footer.jsx'

export default function App() {

  return (
  <React.StrictMode>
    <Header/>
      <HomePage/>
    <Footer/>
  </React.StrictMode>
  )
}

