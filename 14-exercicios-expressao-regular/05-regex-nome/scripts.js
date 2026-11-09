let validarUsuario = /^[a-z0-9_-]{3,16}$/;

console.log(validarUsuario.test("devops_user"));
console.log(validarUsuario.test("js-dev"));
console.log(validarUsuario.test("usr"));
console.log(validarUsuario.test("user_123456789012"));
console.log(validarUsuario.test("us"));
console.log(validarUsuario.test("usuario_muito_longo_aqui"));
console.log(validarUsuario.test("User123"));
console.log(validarUsuario.test("user@123"));