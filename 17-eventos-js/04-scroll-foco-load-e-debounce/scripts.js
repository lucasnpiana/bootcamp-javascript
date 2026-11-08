"use strict";

let inputCampo = document.querySelector("#input-nome");

// Eventos de Foco (focus / blur)
inputCampo.addEventListener("focus", function() {
  console.log("Campo em foco");
});

inputCampo.addEventListener("blur", function() {
  console.log("Campo perdeu o foco");
});

// Carregamento da página (DOMContentLoaded aguarda HTML/DOM sem esperar imagens)
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM completamente carregado e construído");
});

// Padrão Debounce para otimizar eventos de alta frequência (scroll, resize, keyup)
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(this, args);
    }, delay);
  };
}

function aoRolar() {
  console.log(`Scroll Y: ${window.scrollY}`);
}

window.addEventListener("scroll", debounce(aoRolar, 200));