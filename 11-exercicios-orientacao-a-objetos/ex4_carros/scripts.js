class Carro {
  constructor(marca, cor, gasolinaRestante) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
  }

  dirigir(km) {
    let litrosConsumidos = km * 0.1;

    if (this.gasolinaRestante >= litrosConsumidos) {
      this.gasolinaRestante = this.gasolinaRestante - litrosConsumidos;
    } else {
      console.log("Gasolina insuficiente para percorrer a distância!");
    }
  }

  abastecer(litros) {
    this.gasolinaRestante = this.gasolinaRestante + litros;
  }
}

let meuCarro = new Carro("VW", "Preto", 20);

meuCarro.dirigir(100);
console.log(meuCarro.gasolinaRestante);

meuCarro.abastecer(15);
console.log(meuCarro.gasolinaRestante);