import '../styles/estilos.css';
import chipiLogo from '../assets/chipi-gato-feliz-logo-840x779.svg';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <>
            <div>
                <Link to="/">
                    <img className="logo" id="logo"
                        src={chipiLogo}
                        title="Logo de la Asociación"
                        alt="logo de la Asociación, la cara de un gato en negro" />
                </Link>
            </div>
        </>
    )
}

export default Logo