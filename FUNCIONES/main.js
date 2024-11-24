
function iniciarEntrada() {
    let palabras = [];
    let palabra;
    
    do {
        palabra = prompt("Introduce una palabra:");
        if (palabra) palabras.push(palabra.toLowerCase().trim());
    } while (palabra);

    const resultado = contarPalabras(palabras);
    mostrarResultado(resultado);
}

function contarPalabras(palabras) {
    const mapaPalabras = new Map();
    
    palabras.forEach(palabra => {
        mapaPalabras.set(palabra, (mapaPalabras.get(palabra) || 0) + 1);
    });
    
    return mapaPalabras;
}

function mostrarResultado(mapaPalabras) {
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "<h2>Conteo de Palabras</h2>";

    mapaPalabras.forEach((valor, clave) => {
        const p = document.createElement("p");
        p.textContent = `${clave}: ${valor}`;
        divResultado.appendChild(p);
    });
}
