"use strict";

// Strict mode previne criação acidental de variáveis globais
let mensagem = "Modo estrito ativo!";
console.log(mensagem);

// Debug com console.log
let valorA = 10;
let valorB = 20;

if (valorA < valorB) {
  valorA = valorB * 2;
  console.log(`Novo valor de A: ${valorA}`);
}

// Instruction debugger (pausa a execução nas DevTools do navegador)
let acumulador = 0;
for (let i = 0; i < 3; i++) {
  acumulador += i;
  // debugger;
}