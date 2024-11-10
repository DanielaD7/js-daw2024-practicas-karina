
function filtro(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
    return array;
}

function multiplicarPorDos(num) {
    return num * 2;
}

function convertirAMayusculas(palabra) {
    return palabra.toUpperCase();
}

function factorial(n) {
    if (n < 0) return undefined; 
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(filtro([1, 2, 3, 4], multiplicarPorDos));         
console.log(filtro(["hola", "mundo"], convertirAMayusculas));  
console.log(filtro([3, 4, 5], factorial));                     
