class ArrayOrdenado {   // Creamos la clase
  constructor(aux) {    // Metodo constructor
    this.aux = aux;
    this.contenido = [];
  }
  findPos(n) {
    return this.contenido.findIndex((c) => this.aux(n, c) < 0);
  }
  insert(n) {     // Insertar numero al principio
    this.contenido.splice(this.findPos(n), 0, n);
  }
}

// Pruebas
var ordenado = new ArrayOrdenado((a, b) => a - b);
ordenado.insert(5);
ordenado.insert(1);
ordenado.insert(2);
ordenado.insert(4);
ordenado.insert(3);
console.log("array:", ordenado.contenido);