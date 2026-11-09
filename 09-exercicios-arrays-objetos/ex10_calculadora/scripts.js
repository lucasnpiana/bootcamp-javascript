let calculadora = {
  somar: function(num1, num2) {
    return num1 + num2;
  }, 
  
  subtrair: function(num1, num2) {
    return num1 - num2; 
  },
  dividir: function(num1, num2) {
    return num1 / num2; 
}, 
  multiplicar: function(num1, num2) {
    return num1 * num2; 
  }
}

console.log(calculadora.somar(10, 5));
console.log(calculadora.subtrair(10, 5));
console.log(calculadora.dividir(10, 5));
console.log(calculadora.multiplicar(10, 5));