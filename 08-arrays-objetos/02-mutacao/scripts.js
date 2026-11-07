/* Mutação é a alteração direta dos dados de um objeto ou array existente na memória. Em JavaScript, objetos são atribuídos por referência (apontam para um mesmo endereço de memória), e não por valor. Por isso, quando duas variáveis apontam para o mesmo objeto, alterar as propriedades de uma altera automaticamente a outra.
*/

// 1. Mutação na prática (mesma referência de memória)
let pessoaA = { nome: "Lucas" };
let pessoaB = pessoaA;

pessoaB.nome = "Ana";
console.log(pessoaA.nome); // "Ana" -> O objeto original foi mutado

// 2. Comparação de referências
let item1 = { id: 1 };
let item2 = { id: 1 };

console.log(item1 === item2);     // false (endereços de memória diferentes)
console.log(pessoaA === pessoaB); // true (mesmo endereço de memória)

// 3. Evitando mutação (Criando uma cópia com Spread)
let original = { tema: "dark" };
let copia = { ...original };

copia.tema = "light";
console.log(original.tema); // "dark" -> Original protegido