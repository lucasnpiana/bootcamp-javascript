let validarMarca = /^Marca: (Nike|Adidas|Puma|Asics)$/;

console.log(validarMarca.test("Marca: Nike"));
console.log(validarMarca.test("Marca: Adidas"));
console.log(validarMarca.test("Marca: Puma"));
console.log(validarMarca.test("Marca: Asics"));
console.log(validarMarca.test("Marca: Reebok"));
console.log(validarMarca.test("Marca:nike"));