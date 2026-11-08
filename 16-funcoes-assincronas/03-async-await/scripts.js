"use strict";

// Funções assíncronas (async/await)
function buscarDados() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Resposta da API");
    }, 1000);
  });
}

async function executarBusca() {
  console.log("A aguardar resposta...");
  let resultado = await buscarDados();
  console.log(`Recebido: ${resultado}`);
}

executarBusca();