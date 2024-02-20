import '../styles/estilos.css'
import BotonSecundario from './BotonSecundario.jsx'



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
            <div className="imagenes carrousel">
                <div className="grande">
                    <img src="img/gato-rubio-durmiendo.jpg"  
                        className="elementos" 
                        title="Tarzán, gato rescatado que se adoptó en junio de 2023" 
                        alt="gatito rubio durmiendo boca arriba"/>
                    <video src="img/video-gatos-durmiendo.mp4" 
                        className="elementos" 
                        autoPlay muted loop 
                        title="Tarzán y Aladín, dos gatos rubios rescatados durmiendo en una manta de pelos">
                    </video>
                    <img src="img/gatito-rubio-de-cerca.jpg"  
                    className="elementos" 
                    title="Tarzán, gato rescatado que se adoptó en junio de 2023" 
                    alt="gato rubio de cerca"/>
                    <img src="img/gato-acostado-en-cama-celeste.jpg"  
                    className="elementos" 
                    title="Aladín, gato rescatado que se adoptó en junio de 2023" 
                    alt="gato acostado en cama celeste"/>
                </div>
                <ul className="puntos">
                    <li className="punto punto-activo"></li>
                    <li className="punto"></li>
                    <li className="punto"></li>
                    <li className="punto"></li>
                </ul>
            </div>
            <div className="lightbox">
                <button className="cerrar boton-primario">X</button>
                <img src="/img/icon/gato(3).png" className="img-grande" alt=""/>
                <video src="/img/icon/gato(3).png" className="video-grande" controls loop muted></video>
            </div>
        </section>
        </>
    )

}

export default Seccion2