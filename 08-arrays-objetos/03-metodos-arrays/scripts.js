// ==========================================================================
// AULAS 146 A 153: MÉTODOS DE ARRAYS
// ==========================================================================

/* Os métodos de arrays servem para percorrer, alterar, buscar e extrair elementos de uma lista. Em JavaScript, o ponto mais importante é diferenciar os métodos que mutam (alteram o array original diretamente na memória, como push, pop, shift, unshift e reverse) daqueles que não mutam (apenas consultam ou geram novos dados sem alterar o original, como indexOf, lastIndexOf, includes, slice e forEach).
*/

let frutas = ["Maçã", "Banana", "Laranja", "Banana"];

// 1. Loop Tradicional (Aula 146)
for (let i = 0; i < frutas.length; i++) {
  // Percorre por índice
}

// 2. Iteração Moderna com forEach (Aula 151)
frutas.forEach((fruta, i) => {
  console.log(`${i}: ${fruta}`);
});

// 3. Adicionar e Remover Elementos (MUTA O ARRAY ORIGINAL) (Aulas 147 e 148)
frutas.push("Uva");      // Adiciona "Uva" no FIM
let ultimo = frutas.pop(); // Remove "Uva" do FIM

frutas.unshift("Morango"); // Adiciona "Morango" no INÍCIO
let primeiro = frutas.shift(); // Remove "Morango" do INÍCIO

// 4. Buscar Posição e Existência (Aulas 149 e 152)
console.log(frutas.indexOf("Banana"));     // 1 (Primeira ocorrência)
console.log(frutas.lastIndexOf("Banana")); // 3 (Última ocorrência)
console.log(frutas.includes("Laranja"));   // true (Verifica se existe)

// 5. Extrair Fatia (NÃO MUTA O ORIGINAL) (Aula 150)
// Sintaxe: slice(índiceInicio, índiceFimExclusivo)
let fatia = frutas.slice(1, 3); // Extrai os índices 1 e 2 -> ["Banana", "Laranja"]

// 6. Inverter Ordem (MUTA O ARRAY ORIGINAL) (Aula 153)
frutas.reverse(); // Inverte totalmente a ordem do array original