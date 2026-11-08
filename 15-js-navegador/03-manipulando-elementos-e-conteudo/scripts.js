"use strict";

let container = document.querySelector("#container");

// Criar elemento e alterar texto
let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Texto inserido via JS";

// Manipulação de atributos
novoParagrafo.setAttribute("class", "destaque");
console.log(novoParagrafo.getAttribute("class"));

// Inserção com appendChild e insertBefore
container.appendChild(novoParagrafo);

let elementoRef = document.querySelector(".item-referencia");
let novoElemento = document.createElement("span");
novoElemento.textContent = "Item antes do segundo";
container.insertBefore(novoElemento, elementoRef);

// Substituição com replaceChild
let elementoSubstituto = document.createElement("h2");
elementoSubstituto.textContent = "Novo Título";
container.replaceChild(elementoSubstituto, titulo);