import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../components/Header.jsx'
import Seccion1 from '../components/Seccion1Index.jsx'
import Seccion2 from '../components/Seccion2Index.jsx'
import '../styles/estilos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <main>
      <Seccion1/>
      <Seccion2/>
    </main>
    
  </React.StrictMode>,
)
