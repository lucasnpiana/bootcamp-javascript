//RESUMO PRÁTICO: ARRAYS, OBJETOS, PROPRIEDADES E MÉTODOS (Aulas 137 - 144)

// --------------------------------------------------------------------------
// 1. ARRAYS vs OBJETOS (Diferença fundamental de estrutura)
// --------------------------------------------------------------------------

// ARRAY: Lista ORDENADA de elementos acessados por ÍNDICES NUMÉRICOS (começando em 0).
// Indicado para: Coleções sequenciais de itens (ex: lista de compras, pontuações).
const frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[0]); // "Maçã" (acessado via índice numérico)

// OBJETO: Coleção de PARES CHAVE-VALOR sem ordem garantida.
// Indicado para: Mapear entidades do mundo real com atributos e comportamentos.
const usuario = {
  nome: "Lucas",
  idade: 22,
  ativo: true
};
console.log(usuario.nome);     // "Lucas" (notação de ponto)
console.log(usuario["idade"]); // 22 (notação de colchetes)


// --------------------------------------------------------------------------
// 2. PROPRIEDADES vs MÉTODOS
// --------------------------------------------------------------------------

// PROPRIEDADE: É uma variável interna / valor associado a um tipo ou objeto. NÃO USA PARÊNTESES ().
const texto = "JavaScript";
console.log(texto.length); // .length é uma PROPRIEDADE que guarda o número 10

// MÉTODOS: São FUNÇÕES associadas a um objeto. EXECUTAM AÇÕES E USAM PARÊNTESES ().
console.log(texto.toUpperCase()); // .toUpperCase() é um MÉTODOS que executa a conversão

// Criando um Objeto com Propriedades E Métodos:
const pessoa = {
  nome: "Lucas",          // Propriedade (dado)
  profissao: "Dev",       // Propriedade (dado)
  apresentar: function() { // Método (função/comportamento)
    console.log(`Olá, sou o ${this.nome} e trabalho como ${this.profissao}.`);
  }
};

pessoa.apresentar(); // Executa o método -> "Olá, sou o Lucas e trabalho como Dev."


// --------------------------------------------------------------------------
// 3. MANIPULAÇÃO DE OBJETOS (Aulas 142, 143 e 144)
// --------------------------------------------------------------------------

const carro = {
  marca: "Toyota",
  modelo: "Corolla"
};

// A) Adicionando e Deletando propriedades (Aula 142)
carro.ano = 2024;    // Adiciona uma nova chave/valor
delete carro.modelo; // Remove a chave 'modelo' do objeto

console.log(carro); // { marca: 'Toyota', ano: 2024 }


// B) Copiando propriedades com Object.assign (Aula 143)
// Copia as chaves e valores de um ou mais objetos de ORIGEM para um de DESTINO.
const adicionais = { portas: 4, cambio: "Automático" };

// Sintaxe: Object.assign(objetoDestino, objetoOrigem)
Object.assign(carro, adicionais);

console.log(carro); 
// Resultado: { marca: 'Toyota', ano: 2024, portas: 4, cambio: 'Automático' }


// C) Verificando as Chaves do Objeto com Object.keys (Aula 144)
// Retorna um ARRAY contendo todas as chaves (nomes das propriedades) existentes no objeto.
const chaves = Object.keys(carro);

console.log(chaves); 
// Saída: ['marca', 'ano', 'portas', 'cambio']