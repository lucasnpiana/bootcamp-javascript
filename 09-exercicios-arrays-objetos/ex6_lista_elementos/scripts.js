let listaMaisDeCinco = [22, 17, 33, 44, 55, 66];
let listaMenosDeCinco = [ 2, 4, 6, 7];

function verificarElementos(arr) {
  if (arr.length < 5) {
    console.log("Poucos elementos");
  } else {
    console.log("Muitos elementos");
  }
}


verificarElementos(listaMaisDeCinco);
verificarElementos(listaMenosDeCinco);