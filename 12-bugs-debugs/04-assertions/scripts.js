"use strict";

// Lançamento (throw) e captura (try/catch/finally) de erros
function saudarUsuario(nome) {
  if (typeof nome !== "string") {
    throw new Error("O parâmetro 'nome' precisa de ser uma string!");
  }
  console.log(`Olá, ${nome}!`);
}

try {
  saudarUsuario(123);
} catch (error) {
  console.log(`Erro capturado: ${error.message}`);
} finally {
  console.log("Execução finalizada (finally é sempre executado).");
}