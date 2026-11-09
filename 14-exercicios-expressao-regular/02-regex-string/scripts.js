let validarId = /ID$/;

console.log(validarId.test("userID"));
console.log(validarId.test("12345ID"));
console.log(validarId.test("ID"));
console.log(validarId.test("user_id"));
console.log(validarId.test("ID123"));
console.log(validarId.test("ID_usuario"));