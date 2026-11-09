"use strict";

// Criando Regex (RegExp e Literal)
let reg1 = new RegExp("teste");
let reg2 = /teste/;

// Método .test()
console.log(reg2.test("tem teste aqui"));

// Conjuntos []
let regConjunto = /[123]/;
console.log(regConjunto.test("Existe o número 2"));

// Caracteres especiais (\d, \w, \s) e Negação [^]
let regDigito = /\d/;        // [0-9]
let regPalavra = /\w/;       // [a-zA-Z0-9_]
let regEspaco = /\s/;        // Espaços, tabs, quebras de linha
let regNaoDigito = /[^0-9]/; // Exclui números

console.log(regDigito.test("Ano 2026"));
console.log(regNaoDigito.test("12345"));