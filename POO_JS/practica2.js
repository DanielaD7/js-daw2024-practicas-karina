Array.prototype.mediaAritmetica = function(){
    if (this.length === 0) return 0;
    let suma = this.reduce((acumulador, valor) => acumulador + valor, 0);
    return suma / this.length;
};

let numeros = [10, 20, 30, 40, 50];
console.log(numeros.mediaAritmetica());
