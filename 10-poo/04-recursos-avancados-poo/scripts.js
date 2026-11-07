// ==========================================================================
// SEÇÃO POO - PARTE 4: SYMBOL, GETTERS, SETTERS, HERANÇA E INSTANCEOF
// (Aulas 201 a 204)
// ==========================================================================

/* 
Recursos avançados de POO moderna em JS:
- Symbol: Cria identificadores únicos imutáveis (evita colisão de chaves).
- Getters & Setters: Métodos especiais para ler (get) e definir (set) valores.
- Herança (extends/super): Uma classe filha herda métodos e propriedades da classe pai.
- instanceof: Verifica a qual classe um objeto pertence.
*/

// 1. Symbol em Classes (Aula 201)
let patas = Symbol();
class Gato {
  constructor(nome) {
    this.nome = nome;
    this[patas] = 4; // Chave única que não sofre colisão
  }
}

let meuGato = new Gato("Mingau");
console.log(meuGato[patas]); // 4

// 2. Getters e Setters (Aula 202)
class ContaBancaria {
  constructor(saldoInicial) {
    this._saldo = saldoInicial;
  }

  // Getter: Chamado sem parênteses ao ler a propriedade
  get saldo() {
    return `R$ ${this._saldo.toFixed(2)}`;
  }

  // Setter: Executa validações ao atribuir um novo valor
  set deposito(valor) {
    if (valor > 0) {
      this._saldo += valor;
    } else {
      console.log("Valor inválido para depósito.");
    }
  }
}

let conta = new ContaBancaria(1000);
console.log(conta.saldo); // "R$ 1000.00" (usa o get)
conta.deposito = 500;     // Usa o set
console.log(conta.saldo); // "R$ 1500.00"

// 3. Herança com 'extends' e 'super' (Aula 203)
class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

// Classe Filha herda da Classe Pai
class Leao extends Mamifero {
  constructor(patas, temJuba) {
    super(patas); // Chama o constructor da classe pai (Mamifero)
    this.temJuba = temJuba;
  }

  rugir() {
    console.log("ROAR!");
  }
}

let simba = new Leao(4, true);
console.log(simba.patas);   // 4 (Herdado de Mamifero)
console.log(simba.temJuba); // true (Próprio de Leao)
simba.rugir();              // "ROAR!"

// 4. Operador instanceof (Aula 204)
console.log(simba instanceof Leao);     // true
console.log(simba instanceof Mamifero); // true (Herança encadeada)
console.log(conta instanceof Leao);    // false