"use strict";

// Validação de Domínio
let regDominio = /(https?:\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-z]+(\.[a-z]+)?/;
console.log(regDominio.test("https://www.google.com"));

// Validação de E-mail
let regEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
console.log(regEmail.test("usuario@email.com"));
console.log(regEmail.test("email_invalido@com"));

// Validação de Data de Nascimento (DD/MM/AAAA)
let regData = /^[0-3][0-9]\/[0-1][0-9]\/[1-2][0-9]{3}$/;
console.log(regData.test("25/12/1995"));
console.log(regData.test("99/99/9999"));