"use strict";

let botao = document.querySelector("#meu-botao");
let botaoRemover = document.querySelector("#btn-remover");

// Função declarada para permitir remoção posterior
function dispararClique(event) {
  console.log(`Evento disparado: ${event.type}`);
  console.log(`Elemento clicado:`, event.target);
}

// Criar e escutar evento
botao.addEventListener("click", dispararClique);

// Removendo ouvinte (exige a mesma referência de função)
botaoRemover.addEventListener("click", function() {
  botao.removeEventListener("click", dispararClique);
  console.log("Evento removido com sucesso.");
});