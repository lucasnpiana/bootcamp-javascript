"use strict";

// Generators (função* e operador yield)
function* geradorId() {
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

let gerador = geradorId();

console.log(gerador.next().value); // 1
console.log(gerador.next().value); // 2
console.log(gerador.next().value); // 3