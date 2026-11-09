class Banco {
  constructor(saldo) {
    this.saldo = saldo;
  }

  deposito(valor) {
    this.saldo = this.saldo + valor;
    console.log(`Depósito de ${valor} realizado. Saldo atual: ${this.saldo}`);
  }

  saque(valor) {
    if (valor <= this.saldo) {
      this.saldo = this.saldo - valor;
      console.log(`Saque de ${valor} realizado. Saldo atual: ${this.saldo}`);
    } else {
      console.log("Saldo insuficiente!");
    }
  }
}

let minhaConta = new Banco(100);

minhaConta.deposito(50); 
minhaConta.saque(30);    
minhaConta.saque(200);