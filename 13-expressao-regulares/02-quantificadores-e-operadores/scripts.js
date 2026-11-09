"use strict";

// Operador Plus (+) -> 1 ou mais ocorrências
let regPlus = /\d+/;
console.log(regPlus.test(""));
console.log(regPlus.test("123"));

// Operador Question (?) -> Opcional (0 ou 1 ocorrência)
let regOpcao = /Padrao\s?/;
console.log(regOpcao.test("Padrao"));
console.log(regOpcao.test("Padrao "));

// Operador de Precisão {} -> {min, max} ou {exato}
let regTelefone = /\d{4,5}-\d{4}/;
console.log(regTelefone.test("99999-8888"));
console.log(regTelefone.test("123-456"));