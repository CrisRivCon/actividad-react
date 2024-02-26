export default function getValueCookie(nombre) {
    const regex = new RegExp(`${nombre}=.*;?`, 'ig');
    let match = document.cookie.split(';').find((ele) => ele.match(regex));
    let valor = decodeURIComponent(match).split('=');
    return valor[1];
}