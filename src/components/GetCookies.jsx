
export default function getValueCookie(nombre) {
    const regex = new RegExp(`${nombre}=.*;?`, 'ig');
    let match = document.cookie.split(';').find((ele) => ele.match(regex));
    if (!match){
        return false;
    }
    let valor = decodeURIComponent(match).split('=');
    console.log(valor);
    return valor[1];
}