import '../styles/estilos.css'
import BotonSecundario from './BotonSecundario.jsx'
import '../script/index.js'


function Seccion2() {
    const seccion3 = document.querySelector('.seccion-3');
const tabSeccion3 = document.querySelector('.tabs');
const selectoresSeccion3 = document.querySelector('.selectores');





seccion3.addEventListener('mouseenter', transicion3);

function transicion3() {
    tabSeccion3.classList.add('tabs-transicion');
    selectoresSeccion3.classList.add('selectores-transicion');
}

    return (
        <>
        <section id="seccion-2-adopta" class="seccion-2 fondo-seccion-2">
            <div class="texto-secc-2 espacio-izq-sec-1">
                <h2 class="titulo-texto">¿Quieres adoptar?</h2>
                <p>
                    Si quieres adoptar, contáctanos. <br/>
                    Puedes hacerlo a través del <a href="#">formulario <br/>
                    de contacto,</a> por email o por nuestras <br/>
                    redes sociales.     
                </p>
                <span class="tooltip">Haz clic en "formulario de contacto" para enviarnos un email</span>
                <div class="redes-sociales">
                    <a href=""><div class="email"></div></a>
                    <a href=""><div class="facebook"></div></a>
                    <a href=""><div class="instagram"></div></a>
                </div>
                <div class="boton">
                    <a href="src/contacto.html"><span class="boton-primario">Contacto</span></a>
                </div>
            </div>
            <div class="imagenes carrousel">
                <div class="grande">
                    <img src="img/gato-rubio-durmiendo.jpg"  
                        class="elementos" 
                        title="Tarzán, gato rescatado que se adoptó en junio de 2023" 
                        alt="gatito rubio durmiendo boca arriba"/>
                    <video src="img/video-gatos-durmiendo.mp4" 
                        class="elementos" 
                        autoplay muted loop 
                        title="Tarzán y Aladín, dos gatos rubios rescatados durmiendo en una manta de pelos">
                    </video>
                    <img src="img/gatito-rubio-de-cerca.jpg"  
                    class="elementos" 
                    title="Tarzán, gato rescatado que se adoptó en junio de 2023" 
                    alt="gato rubio de cerca"/>
                    <img src="img/gato-acostado-en-cama-celeste.jpg"  
                    class="elementos" 
                    title="Aladín, gato rescatado que se adoptó en junio de 2023" 
                    alt="gato acostado en cama celeste"/>
                </div>
                <ul class="puntos">
                    <li class="punto punto-activo"></li>
                    <li class="punto"></li>
                    <li class="punto"></li>
                    <li class="punto"></li>
                </ul>
            </div>
            <div class="lightbox">
                <button class="cerrar boton-primario">X</button>
                <img src="/img/icon/gato(3).png" class="img-grande" alt=""/>
                <video src="/img/icon/gato(3).png" class="video-grande" controls loop muted></video>
            </div>
        </section>
        </>
    )

}

export default Seccion2