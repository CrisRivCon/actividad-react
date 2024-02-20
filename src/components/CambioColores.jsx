import '../styles/estilos.css'
import verdeImg from '../assets/icon/interfaz-de-contraste-simbolo-circular-mitad-verde-mitad-blanco.png'
import negroImg from '../assets/icon/interfaz-de-contraste-simbolo-circular-mitad-negro-mitad-blanco.png'

function Temas() {
    return (
        <>
        <div className="temas temas-menu">
                            <a id="tema-clasico" 
                            >
                                <img 
                                src={verdeImg}
                                title="Cambiar a combinación de colores clásico"
                                alt="Cambiar a combinación de colores clásico"/>
                            </a>
                            <a id="tema-accesible" >
                                <img src={negroImg}
                                title="Cambiar a combinación de colores de alto contraste"
                                alt="Cambiar a combinación de colores de alto contraste"/>
                            </a>
                        </div>
                    </>
                    )
}

export default Temas