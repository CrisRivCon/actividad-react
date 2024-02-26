export default function setCookie(nombre, valor, expires, path = '/') {
    let cuki = encodeURIComponent(nombre) + '=' + encodeURIComponent(valor) + '; path =' + path;
    let fecha = new Date(Date.now() + (expires * 24 * 60 * 60));
    document.cookie = cuki + ';expires=' + fecha.toUTCString() + '; samesite = lax';
}