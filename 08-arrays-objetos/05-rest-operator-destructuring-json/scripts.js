/*
O Rest Operator, o Destructuring e o JSON são recursos modernos essenciais em JavaScript para simplificar a manipulação de dados e a comunicação com APIs. O Destructuring permite extrair propriedades de objetos e elementos de arrays diretamente para variáveis, o Rest Operator agrupa o restante dos valores num único array, e o JSON (JavaScript Object Notation) é o formato de texto padrão para a troca de dados, utilizando JSON.stringify() para converter objetos em texto e JSON.parse() para converter texto de volta em objetos.   
*/

// 1. Rest Operator (...) -> Agrupa múltiplos valores num único array
function somar(...numeros) {
  return numeros.reduce((total, n) => total + n, 0);
}
console.log(somar(10, 20, 30)); // 60

// 2. Destructuring em Objetos -> Extrai propriedades pelo NOME da chave
const usuario = { nome: "Lucas", cargo: "Dev", pais: "Brasil" };
const { nome, cargo } = usuario;
console.log(nome, cargo); // "Lucas" "Dev"

// 3. Destructuring em Arrays -> Extrai elementos pela POSIÇÃO
const numeros = [100, 200, 300, 400];
const [primeiro, segundo, ...resto] = numeros; // Combina Destructuring com Rest Operator
console.log(primeiro, resto); // 100 [300, 400]

// 4. JSON: Conversão entre Objeto e Texto (JSON.stringify e JSON.parse)
const config = { tema: "dark", ativo: true };

// Objeto JS -> String JSON (Para salvar em localStorage ou enviar para APIs)
const jsonTexto = JSON.stringify(config);
console.log(jsonTexto); // '{"tema":"dark","ativo":true}'

// String JSON -> Objeto JS (Para ler dados recebidos de APIs ou storage)
const configObjeto = JSON.parse(jsonTexto);
console.log(configObjeto.tema); // "dark"