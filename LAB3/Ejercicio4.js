var contador = {
  cont: 0,
  sig(cont) {     // Funcion para incrementar cont
      this.cont++;
    }
};

//Pruebas
console.log(contador.sig());    // cont = 0 + 1 = 1
console.log(contador.sig());    // cont = 1 + 1 = 2
console.log(contador.sig());    // cont = 2 + 1 = 3
console.log(contador.cont);     // Cont deberia ser 3

// Volvemos a probar sabiendo que actualmemte cont = 3
console.log(contador.sig());    // cont = 3 + 1 = 4
console.log(contador.sig());    // cont = 4 + 1 = 5
console.log(contador.sig());    // cont = 5 + 1 = 6
console.log(contador.sig());    // cont = 6 + 1 = 7
console.log(contador.sig());    // cont = 7 + 1 = 8
console.log(contador.sig());    // cont = 8 + 1 = 9
console.log(contador.cont);     // Cont deberia ser 9