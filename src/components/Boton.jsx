import '../styles/estilos.css'
const rutaServidor = 'http://localhost:8008/src/datos/carrito.php'

function Boton(props) {
    const { texto, url, clases, tienda } = props;

    function anyadir() {
        if (tienda) {
            const articulo = props.tienda;
            const { Codigo } = articulo;
            fetch(`${rutaServidor}?id=${Codigo}`, {
                'mode': 'no-cors',
            })
                .then(response => {
                    if (!response.ok) throw new Error('Error');
                    return response;
                })
                .catch(error => console.log(error));
        }
    }

    return (
        <a href={url} className={tienda ? "boton-tienda" : ""} onClick={anyadir}>
            <span className={clases}>{texto}</span>
        </a>
    )
}

export default Boton