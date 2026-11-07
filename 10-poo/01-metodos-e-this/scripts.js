// ==========================================================================
// SEÇÃO POO - PARTE 1: INTRODUÇÃO À POO, MÉTODOS E A PALAVRA-CHAVE THIS
// (Aulas 189 a 191)
// ==========================================================================

/* 
Orientação a Objetos (POO) é um paradigma de programação focado em estruturar
o código em torno de "Objetos", que combinam dados (propriedades/atributos)
e comportamentos (métodos/funções).

Em JavaScript, métodos são funções associadas a propriedades de um objeto.
A palavra-chave 'this' dentro de um método refere-se ao próprio objeto que
invocou o método.
*/

// 1. Criando objeto com propriedades e métodos simples (Aula 190)
let animal = {
  nome: "Bob",
  latir: function() {
    console.log("Au au!");
  }
};

animal.latir(); // "Au au!"

// 2. Utilizando 'this' para acessar e alterar propriedades internas (Aula 191)
let pessoa = {
  nome: "Lucas",
  idade: 22,
  
  // Acessando dados do próprio objeto
  apresentar: function() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  },

  // Alterando o estado interno do objeto via método
  fazerAniversario: function() {
    this.idade += 1;
  },

  setNome: function(novoNome) {
    this.nome = novoNome;
  }
};

pessoa.apresentar(); // "Olá, meu nome é Lucas e tenho 22 anos."
pessoa.fazerAniversario();
pessoa.apresentar(); // "Olá, meu nome é Lucas e tenho 23 anos."
pessoa.setNome("Ana");
pessoa.apresentar(); // "Olá, meu nome é Ana e tenho 23 anos."