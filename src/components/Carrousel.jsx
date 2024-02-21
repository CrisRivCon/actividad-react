import '../styles/estilos.css'

export default function Boton(props) {
    const Urls = props.urls.split(',');
    return (
        <>
        <div className="imagenes carrousel">
                <div className="grande">
                   { Urls.map((url, i) => (
                            <img src={url}
                                key={i}
                                className="elementos"/>
                            
                    ))}
                    
                </div>
                <ul className="puntos">
                { Urls.map((url, i) => (
                        i == 0 ? 
                            
                                <li className="punto punto-activo" key={i}> </li>
                            : 
                            
                                <li className="punto" key={i}></li>
                            
                        
                ))}

                
                </ul>
            </div>
            <div className="lightbox">
                <button className="cerrar boton-primario">X</button>
                <img src="/img/icon/gato(3).png" className="img-grande" alt=""/>
                <video src="/img/icon/gato(3).png" className="video-grande" controls loop muted></video>
            </div>
        </>    
    )
}
