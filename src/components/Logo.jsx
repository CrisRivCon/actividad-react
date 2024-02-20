import '../styles/estilos.css'
import chipiLogo from '../assets/chipi-gato-feliz-logo-840x779.svg'

function Logo() {
    return (
        <>
        <div>
                <a href="#">
                    <img className="logo" id="logo" 
                    src={chipiLogo} 
                    title="Logo de la Asociación"
                    alt="logo de la Asociación, la cara de un gato en negro"/></a>
            </div>
                    </>
    )
}

export default Logo