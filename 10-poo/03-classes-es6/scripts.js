// ==========================================================================
// SEÇÃO POO - PARTE 3: CLASSES NO ES6, CONSTRUCTOR E OVERRIDE
// (Aulas 198 a 200)
// ==========================================================================

/* 
No ES6 (ECMAScript 2015), o JavaScript introduziu a sintaxe de 'class'.
Ela é um "syntactic sugar" (açúcar sintático) sobre os Prototypes: torna a
escrita mais limpa e parecida com linguagens como Java ou C#, mas por baixo
dos panos continua utilizando a mecânica de protótipos.
*/

// 1. Declaração de Class e Constructor (Aulas 198 e 199)
let Cachorro = class {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  // Métodos são anexados automaticamente ao prototype da classe
  latir() {
    console.log("Au au au!");
  }

  exibirDetalhes() {
    console.log(`Raça: ${this.raca}, Cor: ${this.cor}`);
  }
};

let labrador = new Cachorro("Labrador", "Amarelo");
labrador.latir();          // "Au au au!"
labrador.exibirDetalhes(); // "Raça: Labrador, Cor: Amarelo"

// 2. Override no Prototype (Aula 200)
// Define um valor padrão na classe/prototype e sobrescreve na instância individual
Cachorro.prototype.patas = 4; // Valor default no prototype

let viralata = new Cachorro("Vira-lata", "Caramelo");
console.log(viralata.patas); // 4 (Vem do prototype)

// Sobrescrevendo localmente apenas para esta instância
let cachorroTresPatas = new Cachorro("Vira-lata", "Preto");
cachorroTresPatas.patas = 3;

console.log(cachorroTresPatas.patas); // 3 (Sobrescrito na instância)
console.log(viralata.patas);          // 4 (Permanece inalterado no prototype)