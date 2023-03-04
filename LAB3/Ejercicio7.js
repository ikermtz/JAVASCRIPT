// Array que obtenemos
const almacen = [
  { tipo: "lavadora", valor: 5000 },
  { tipo: "lavadora", valor: 650 },
  { tipo: "vaso", valor: 10 },
  { tipo: "armario", valor: 1200 },
  { tipo: "lavadora", valor: 77 },
];

let totalValorLavadoras = almacen
  .filter( (a) => a.tipo == "lavadora") // Buscamos lavadoras
  .reduce( (total, objeto) => total + objeto.valor, 0); // Actualizamos el valor total
console.log("El valor total de las lavadoras es: " + totalValorLavadoras);

let totalValorVasos = almacen
  .filter( (b) => b.tipo == "vaso") // Buscamos vasos
  .reduce( (total, objeto) => total + objeto.valor, 0); // Actualizamos el valor total
console.log("El valor total de los vasos es: " + totalValorVasos);

let totalValorArmarios = almacen
  .filter( (c) => c.tipo == "armario") // Buscamos armarios
  .reduce( (total, objeto) => total + objeto.valor, 0); // Actualizamos el valor total
console.log("El valor total de los armarios es: " + totalValorArmarios);