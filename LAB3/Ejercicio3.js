function Punto(x, y) {
  this.x = x;
  this.y = y;
}
Punto.prototype.suma = function (P) { //Funcion suma usando prototipos
  return new Punto(this.x + P.x, this.y + P.y);
};

//Pruebas
console.log(new Punto(1, 2).suma(new Punto(2, 1)));
console.log(new Punto(0, 0).suma(new Punto(2, 1)));
console.log(new Punto(1, 2).suma(new Punto(0, 0)));