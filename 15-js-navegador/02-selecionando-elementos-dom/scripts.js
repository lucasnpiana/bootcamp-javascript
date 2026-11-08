"use strict";

// Seleção tradicional por Tag, ID e Classe
let titulo = document.getElementById("titulo-principal");
let itensLista = document.getElementsByTagName("li");
let cartoes = document.getElementsByClassName("card");

// Seleção moderna com seletores CSS (Recomendada)
let primeiroBotao = document.querySelector(".btn");
let todosBotoes = document.querySelectorAll(".btn");

console.log(titulo);
console.log(todosBotoes.length);