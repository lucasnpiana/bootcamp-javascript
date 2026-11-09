class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  setRua(novaRua) {
    this.rua = novaRua;
  }

  setBairro(novoBairro) {
    this.bairro = novoBairro;
  }

  setCidade(novaCidade) {
    this.cidade = novaCidade;
  }

  setEstado(novoEstado) {
    this.estado = novoEstado;
  }
}

// Teste da classe:
let meuEndereco = new Endereco("Rua das Flores, 123", "Centro", "Porto", "Porto");
console.log(meuEndereco);

meuEndereco.setRua("Avenida Liberdade, 456");
meuEndereco.setBairro("Baixa");
meuEndereco.setCidade("Lisboa");
meuEndereco.setEstado("Lisboa");

console.log(meuEndereco);