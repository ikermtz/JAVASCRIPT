class Locutor { // Creamos la clase Locutor
  constructor(nombre, verbo) {  // Tiene dos atributos
    this.nombre = nombre;
    this.verbo = verbo || "dice";
  }
  dice(texto) { // Funcion decir
    console.log(this.nombre + " " + this.verbo + " '" + texto + "'");
  }
}

class Feriante extends Locutor { // Clase con herencia
  constructor(nombre) {
    super(nombre, "grita"); // Hereda nombre y modifica el verbo
  }
  dice(texto) { // Hereda la funcion
    super.dice(texto.toUpperCase());
  }
}

// Pruebas
new Feriante("Mr. Crecepelo").dice("Me lo quitan de las manos");
new Feriante("Mr. Champions").dice("SIIIIUUUUU");
new Feriante("Iker").dice("Hola mundo!");