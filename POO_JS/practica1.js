function Punto(x, y) {
    this.x = typeof x === "number" ? x : 0;
    this.y = typeof y === "number" ? y : 0;

    this.cambiar = function (nuevoX, nuevoY) {
        this.x = typeof nuevoX === "number" ? nuevoX : this.x;
        this.y = typeof nuevoY === "number" ? nuevoY : this.y;
    };

    this.copia = function () {
        return new Punto(this.x, this.y);
    };

    this.suma = function (otroPunto) {
        return new Punto(this.x + otroPunto.x, this.y + otroPunto.y);
    };
}

const p1 = new Punto(3, 5);
console.log(`Punto p1: (${p1.x}, ${p1.y})`);

p1.cambiar(7, 9);
console.log(`Después de cambiar: (${p1.x}, ${p1.y})`);

const copiaP1 = p1.copia();
console.log(`Copia de p1: (${copiaP1.x}, ${copiaP1.y})`);

const p2 = new Punto(2, 3);
console.log(`Punto p2: (${p2.x}, ${p2.y})`);

const sumaPuntos = p1.suma(p2);
console.log(`Suma de p1 y p2: (${sumaPuntos.x}, ${sumaPuntos.y})`);
