let validarMaiusculas = /^[A-Z]+$/;

console.log(validarMaiusculas.test("JAVASCRIPT"));
console.log(validarMaiusculas.test("DEVOPS"));
console.log(validarMaiusculas.test("JavaScript"));
console.log(validarMaiusculas.test("abc"));
console.log(validarMaiusculas.test("123"));