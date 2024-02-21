import '../styles/estilos.css'

function Boton(props) {
    const Texto = props.texto;
    const Url = props.url;
    const Clases = props.clases;
    
    return (
        <>
        <a href={Url}>
            <span className="boton-secundario boton-nav">{Texto}</span>
        </a>
        </>    
    )
}

export default Boton