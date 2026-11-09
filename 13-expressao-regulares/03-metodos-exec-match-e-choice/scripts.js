"use strict";

// Método .exec() -> Retorna objeto com detalhes da busca
let regExec = /\d+/;
let resultadoExec = regExec.exec("O número é 100");
console.log(resultadoExec);
console.log(resultadoExec.index);

// Método .match() -> Executado na String
let texto = "O número é 200";
let resultadoMatch = texto.match(/\d+/);
console.log(resultadoMatch);

// Choice Pattern (|) -> Operador OU
let regFrutas = /maçã|banana|laranja/;
console.log(regFrutas.test("Eu gosto de banana"));
console.log(regFrutas.test("Eu gosto de uva"));