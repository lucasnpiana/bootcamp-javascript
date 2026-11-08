"use strict";

// Programação assíncrona com setTimeout e Callbacks
console.log("Início");

setTimeout(function() {
  console.log("Executado assincronamente após 1 segundo");
}, 1000);

console.log("Fim");

// Função com callback
function processar(callback) {
  let resultado = 10 + 20;
  callback(resultado);
}

processar(function(res) {
  console.log(`Resultado via callback: ${res}`);
});