"use strict";

// Criando e consumindo Promises, tratamento de falhas e Promise.all
let promessa = new Promise(function(resolve, reject) {
  let sucesso = true;

  if (sucesso) {
    resolve("Dados carregados!");
  } else {
    reject("Erro ao carregar dados.");
  }
});

promessa
  .then(function(dados) {
    console.log(dados);
  })
  .catch(function(erro) {
    console.log(`Falha: ${erro}`);
  });

// Resolvendo várias Promises simultaneamente (Promise.all)
let p1 = Promise.resolve(10);
let p2 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(20);
  }, 500);
});

Promise.all([p1, p2]).then(function(valores) {
  console.log(valores); // [10, 20]
});