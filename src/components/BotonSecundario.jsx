import '../styles/estilos.css'

function BotonSecundario(props) {
    const Texto = props.texto;
    const Url = props.url;
    
    return (
        <>
        <a href={Url}>
            <span className="boton-secundario boton-nav">{Texto}</span>
        </a>
        </>    
    )
}

export default BotonSecundario