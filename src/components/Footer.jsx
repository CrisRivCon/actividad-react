import '../styles/estilos.css'

export default function Footer() {
  return (
    <>
      <footer className="footer fondo-footer">
        <div className="texto-footer">
            <div className="contacto">
                <h3>CONTACTO</h3>
                    <a href="mailto:chipigatofeliz@gmail.com"></a><a href="mailto:chipigatofeliz@gmail.com">chipigatofeliz@gmail.com</a>
                    <a href="https://www.facebook.com/profile.php?id=100010805748721"></a><a href="https://www.facebook.com/profile.php?id=100010805748721">Cecilia Chipi</a>
                    <a href="https://www.facebook.com/PlataformaGatoFeliz"></a><a href="https://www.facebook.com/PlataformaGatoFeliz">Chipi Gato Feliz</a>
                    <a href="https://instagram.com/chipigatofeliz?igshid=YzAwZjE1ZTI0Zg=="></a><a href="https://instagram.com/chipigatofeliz?igshid=YzAwZjE1ZTI0Zg==">Chipi Gato Feliz</a>
            </div>
            <div className="enlaces">
                <h3>ENLACES DE INTERÉS</h3>
                <a href="">Politicas de privacidad</a>
                <a href="src/contacto.html">Contacto</a>
                <a href="src/quienes-somos.html">Quienes somos</a>
                <a href="src/blog.html">Blog</a>
            </div>
            <div className="ubicacion">
                <h3>UBICACIÓN</h3>
                    <a href="https://maps.app.goo.gl/jeHxYJJrsPhcJytH8"></a><a href="https://maps.app.goo.gl/jeHxYJJrsPhcJytH8">Chipiona, Cádiz</a>
            </div>
            <div className="footer-footer">
                <hr/>
                <a href="">Proyecto Gestión Chipi Gato Feliz © 2023 by Cristina Rivera is licensed under CC BY-NC-SA 4.0.</a>
 
            </div>
        </div>     
    </footer>
    </>
  )
}

