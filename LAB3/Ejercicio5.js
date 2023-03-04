// Array que obtenemos
const almacen = [
  { tipo: "lavadora", valor: 5000 },
  { tipo: "lavadora", valor: 650 },
  { tipo: "vaso", valor: 10 },
  { tipo: "armario", valor: 1200 },
  { tipo: "lavadora", valor: 77 },
];


let totalValorLavadoras = almacen
  .filter(function (a) { // Filtramos para obtener los objetos cuyo tipo es lavadora
    return a.tipo == "lavadora";
  })
  .reduce(function (total, objeto) {    // "Genera" un array de una celda con el valor total de los objetos lavadora
    return total + objeto.valor;
  }, 0);
console.log("El valor total de las lavadoras es: " + totalValorLavadoras);


let totalValorVasos = almacen
  .filter(function (b) { // Filtramos para obtener los objetos cuyo tipo es vaso
    return b.tipo == "vaso";
  })
  .reduce(function (total, objeto) {    // "Genera" un array de una celda con el valor total de los objetos vaso
    return total + objeto.valor;
  }, 0);
console.log("El valor total de los vasos es: " + totalValorVasos);

let totalValorArmarios = almacen
  .filter(function (c) { // Filtramos para obtener los objetos cuyo tipo es armario
    return c.tipo == "armario";
  })
  .reduce(function (total, objeto) {    // "Genera" un array de una celda con el valor total de los objetos armario
    return total + objeto.valor;
  }, 0);
console.log("El valor total de los armarios es: " + totalValorArmarios);