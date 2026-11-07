/* Os métodos de strings servem para tratar, formatar e transformar textos. Em JavaScript, as strings são imutáveis, o que significa que nenhum método altera a string original diretamente na memória — todos retornam uma nova string (ou um array, no caso do split). Métodos como trim limpam espaços indesejados, padStart preenche o início para padronização, split e join convertem entre texto e array, e repeat multiplica o conteúdo.
*/

// 1. Limpeza de espaços nas extremidades (trim)
const textoComEspacos = "   Lucas Piana   ";
console.log(textoComEspacos.trim()); // "Lucas Piana"

// 2. Preenchimento no início para padronização (padStart)
const codigo = "734";
console.log(codigo.padStart(6, "0")); // "000734" (Garante tamanho 6 preenchendo com "0")

// 3. Converter Texto em Array (split) e Array em Texto (join)
const frase = "aprender javascript e praticar";
const palavras = frase.split(" "); // ["aprender", "javascript", "e", "praticar"]
const slug = palavras.join("-");   // "aprender-javascript-e-praticar"

// 4. Repetição de texto (repeat)
const divisor = "=";
console.log(divisor.repeat(10)); // "=========="