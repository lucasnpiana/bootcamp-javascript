"use strict";

let caixa = document.querySelector(".caixa");

// Dimensões (offsetWidth/Height inclui borda/padding; clientWidth/Height considera apenas área visível)
let larguraTotal = caixa.offsetWidth;
let alturaTotal = caixa.offsetHeight;
let larguraInterna = caixa.clientWidth;

// Posições em relação à tela (viewport)
let posicoes = caixa.getBoundingClientRect();
console.log(posicoes.top, posicoes.left);

// Modificação de CSS direto via JS
caixa.style.color = "blue";
caixa.style.backgroundColor = "lightgrey";
caixa.style.marginTop = "20px";