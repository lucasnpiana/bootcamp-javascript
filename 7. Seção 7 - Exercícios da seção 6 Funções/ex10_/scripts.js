let numero = 17;
let ePrimo = true;

if (numero <= 1) {
  ePrimo = false;
} else {
  
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      ePrimo = false;
      break; 
    }
  }
}


if (ePrimo) {
  console.log(`O número ${numero} é primo!`);
} else {
  console.log(`O número ${numero} não é primo.`);
}