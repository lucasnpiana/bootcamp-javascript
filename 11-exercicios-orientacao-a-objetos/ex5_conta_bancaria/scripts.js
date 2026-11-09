class ContaBancaria {
  constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca) {
    this.saldoContaCorrente = saldoContaCorrente;
    this.saldoContaPoupanca = saldoContaPoupanca;
    this.jurosPoupanca = jurosPoupanca;
  }

  deposito(valor) {
    this.saldoContaCorrente = this.saldoContaCorrente + valor;
  }

  saque(valor) {
    if (valor <= this.saldoContaCorrente) {
      this.saldoContaCorrente = this.saldoContaCorrente - valor;
    } else {
      console.log("Saldo insuficiente na conta corrente!");
    }
  }

  transferirParaCorrente(valor) {
    if (valor <= this.saldoContaPoupanca) {
      this.saldoContaPoupanca = this.saldoContaPoupanca - valor;
      this.saldoContaCorrente = this.saldoContaCorrente + valor;
    } else {
      console.log("Saldo insuficiente na conta poupança!");
    }
  }

  aplicarJuros() {
    let juros = (this.saldoContaPoupanca * this.jurosPoupanca) / 100;
    this.saldoContaPoupanca = this.saldoContaPoupanca + juros;
  }
}

class ContaEspecial extends ContaBancaria {
  constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca) {
    super(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca * 2);
  }
}

// Teste da Conta Normal:
let contaNormal = new ContaBancaria(1000, 2000, 1);
contaNormal.deposito(500);
contaNormal.saque(200);
contaNormal.transferirParaCorrente(300);
console.log(contaNormal);

let contaEspecial = new ContaEspecial(1000, 2000, 1);
console.log(contaEspecial);