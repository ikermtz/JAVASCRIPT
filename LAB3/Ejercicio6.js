// Array que obtenemos
const almacen = [
  { tipo: "lavadora", valor: 5000 },
  { tipo: "lavadora", valor: 650 },
  { tipo: "vaso", valor: 10 },
  { tipo: "armario", valor: 1200 },
  { tipo: "lavadora", valor: 77 },
];

// Pruebas
almacen.map((item) => console.log(item.tipo + " tiene un valor de " + item.valor));
// Map nos sirve para iterar el array