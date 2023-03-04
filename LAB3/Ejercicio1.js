class Punto {   // Creamos la clase Punto
  constructor(x, y) {   // Tiene dos atributos (coordenadas)
    this.x = x;
    this.y = y;
  }
  suma(P) { // Funcion de suma
    return new Punto(this.x + P.x, this.y + P.y);
  }
}

// Pruebas
console.log(new Punto(1, 2).suma(new Punto(2, 1)));
console.log(new Punto(0, 0).suma(new Punto(2, 1)));
console.log(new Punto(1, 2).suma(new Punto(0, 0)));