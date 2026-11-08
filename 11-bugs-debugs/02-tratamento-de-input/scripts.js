"use strict";

// Tratamento e validação de entradas
function processarNumero(valor) {
  let numero = Number(valor);

  if (Number.isNaN(numero)) {
    console.log("Por favor, passa apenas números válidos!");
    return null;
  }

  return numero;
}

let entradaValida = processarNumero("42");
let entradaInvalida = processarNumero("texto");