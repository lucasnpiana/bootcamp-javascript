let validarIP = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

console.log(validarIP.test("127.0.0.1"));
console.log(validarIP.test("192.168.0.1"));
console.log(validarIP.test("10.0.0.255"));
console.log(validarIP.test("127.0.0.1.5"));
console.log(validarIP.test("abc.def.ghi.jkl"));
console.log(validarIP.test("192.168.1"));