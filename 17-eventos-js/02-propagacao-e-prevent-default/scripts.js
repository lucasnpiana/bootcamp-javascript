"use strict";

let container = document.querySelector("#container");
let link = document.querySelector("#meu-link");

// Cancelar comportamento padrão do navegador (ex: links, envios de form)
link.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Navegação padrão bloqueada");
});

// Parar borbulhamento / propagação para elementos pai (Event Bubbling)
link.addEventListener("click", function(event) {
  event.stopPropagation();
  console.log("Evento processado sem subir para o container");
});

container.addEventListener("click", function() {
  console.log("Clique no container pai");
});