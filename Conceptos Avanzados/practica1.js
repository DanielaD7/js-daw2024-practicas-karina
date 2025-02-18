
function setCookie(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    document.cookie = `${nombre}=${valor};expires=${fecha.toUTCString()};path=/`;
}

function getCookie(nombre) {
    let cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        let [key, value] = cookies[i].split('=');
        if (key === nombre) return value;
    }
    return null;
}

function borrarCookie(nombre) {
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function actualizarVisitas() {
    let visitas = parseInt(getCookie("visitas")) || 0;
    visitas++;

    if (visitas > 10) {
        visitas = 0;
        borrarCookie("visitas");
    } else {
        setCookie("visitas", visitas, 30);
    }

    document.getElementById("contador").textContent = visitas;
}

actualizarVisitas();
