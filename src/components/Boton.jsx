import '../styles/estilos.css'

function Boton(props) {
    const Texto = props.texto;
    const Url = props.url;
    const Clases = props.clases;
    const Tienda = props.tienda;
    
    return (
        <a href={Url} className={Tienda ? "boton-tienda" : ""}>
            <span className={Clases}>{Texto}</span>
        </a>
    )
}

export default Boton