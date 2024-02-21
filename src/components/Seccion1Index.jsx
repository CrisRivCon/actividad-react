import '../styles/estilos.css'
import Boton from './Boton.jsx'



function Seccion1() {

    return (
        <>
        <section id="seccion-1" className="seccion-1">
            <div className="fondo-seccion-1"></div>
            <div className="cubre-fotos"></div>
            <div className="texto-seccion-1">
                <h1>Asociación Chipi Gato Feliz</h1>
                <p>
                    Dedicadas al cuidado y rescate de los gatos sin hogar <br/> en Chipiona.
                </p>
                <div className="botones">
                    <a href="src/quienes-somos.html"><span className="boton-primario">SABER MÁS</span></a>
                    <Boton texto="COLABORA" url="#seccion-3-colabora"/>
                </div>
            </div>
        </section>
        </>
    )

}

export default Seccion1