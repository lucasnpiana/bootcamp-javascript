// ==========================================================================
// SEÇÃO POO - PARTE 2: PROTOTYPES E FUNÇÕES CONSTRUTORAS (PADRÃO LEGADO)
// (Aulas 192 a 197)
// ==========================================================================

/* 
Prototype é a mecânica fundamental do JavaScript para herança. Quando tentamos
acessar uma propriedade que não existe num objeto, o JS procura essa propriedade
no seu "prototype" (objeto pai/ancestral na cadeia de protótipos).

Antes do ES6, instanciávamos objetos utilizando Funções Construtoras combinadas
com o operador 'new' e anexávamos métodos ao 'prototype' para economizar memória.
*/

// 1. Conceito de Prototype e Fallback (Aulas 192 e 193)
let objetoPai = {
  maos: 2
};

let objetoFilho = Object.create(objetoPai); // Herda de objetoPai
objetoFilho.nome = "Pedro";

console.log(objetoFilho.nome); // "Pedro" (Propriedade própria)
console.log(objetoFilho.maos); // 2 (Buscado no prototype)
console.log(Object.getPrototypeOf(objetoFilho) === objetoPai); // true

// 2. Instanciando por Função Construtora + 'new' (Aulas 195 e 196)
function Carro(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

// 3. Adicionando Métodos no Prototype da Construtora (Aula 197)
// Evita recriar a mesma função em cada nova instância gerada.
Carro.prototype.ligar = function() {
  console.log(`O ${this.marca} ${this.modelo} está ligado!`);
};

let meuCarro = new Carro("Toyota", "Corolla");
let outroCarro = new Carro("Honda", "Civic");

meuCarro.ligar();   // "O Toyota Corolla está ligado!"
outroCarro.ligar(); // "O Honda Civic está ligado!"