import '../styles/estilos.css'
import Carrousel from './Carrousel.jsx'

const UrlsCarru = "./src/assets/carrousel/gato-rubio-durmiendo.jpg,./src/assets/carrousel/gato-rubio-durmiendo.jpg,./src/assets/carrousel/gato-rubio-durmiendo.jpg";


function Seccion2() {
        return (
        <>
        <section id="seccion-2-adopta" className="seccion-2 fondo-seccion-2">
            <div className="texto-secc-2 espacio-izq-sec-1">
                <h2 className="titulo-texto">¿Quieres adoptar?</h2>
                <p>
                    Si quieres adoptar, contáctanos. <br/>
                    Puedes hacerlo a través del <a href="#">formulario <br/>
                    de contacto,</a> por email o por nuestras <br/>
                    redes sociales.     
                </p>
                <span className="tooltip">Haz clic en "formulario de contacto" para enviarnos un email</span>
                <div className="redes-sociales">
                    <a href=""><div className="email"></div></a>
                    <a href=""><div className="facebook"></div></a>
                    <a href=""><div className="instagram"></div></a>
                </div>
                <div className="boton">
                    <a href="src/contacto.html"><span className="boton-primario">Contacto</span></a>
                </div>
            </div>
            <Carrousel urls={UrlsCarru} />
        </section>
        </>
    )

}

export default Seccion2