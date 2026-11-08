"use strict";

let caixa = document.querySelector(".caixa-interativa");

// Eventos de teclado (keydown / keyup)
window.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    console.log("Tecla Enter pressionada!");
  }
  console.log(`Tecla: ${event.key} | Código: ${event.code}`);
});

// Eventos de mouse (click, dblclick, mousedown, mouseup, mousemove)
caixa.addEventListener("dblclick", function() {
  console.log("Duplo clique detectado");
});

window.addEventListener("mousemove", function(event) {
  let posX = event.clientX;
  let posY = event.clientY;
  // Captura de coordenadas na tela
});