class Carrinho {
  constructor(itens, quantidadeTotal, valorTotal) {
    this.itens = itens;
    this.quantidadeTotal = quantidadeTotal;
    this.valorTotal = valorTotal;
  }

  adicionarItem(item) {
    let existe = false;

    for (let i = 0; i < this.itens.length; i++) {
      if (this.itens[i].id === item.id) {
        this.itens[i].qtd = this.itens[i].qtd + item.qtd;
        existe = true;
      }
    }

    if (!existe) {
      this.itens.push(item);
    }

    this.quantidadeTotal = this.quantidadeTotal + item.qtd;
    this.valorTotal = this.valorTotal + (item.preco * item.qtd);
  }

  removerItem(item) {
    for (let i = 0; i < this.itens.length; i++) {
      if (this.itens[i].id === item.id) {
        let itemCarrinho = this.itens[i];

        if (itemCarrinho.qtd > item.qtd) {
          itemCarrinho.qtd = itemCarrinho.qtd - item.qtd;
        } else {
          this.itens.splice(i, 1);
        }

        this.quantidadeTotal = this.quantidadeTotal - item.qtd;
        this.valorTotal = this.valorTotal - (item.preco * item.qtd);
        break;
      }
    }
  }
}

let carrinho = new Carrinho(
  [
    { id: 1, nome: "Camisa", qtd: 1, preco: 20 },
    { id: 2, nome: "Calça", qtd: 2, preco: 50 }
  ],
  3,
  120
);

console.log(carrinho);

carrinho.adicionarItem({ id: 1, nome: "Camisa", qtd: 2, preco: 20 });
console.log(carrinho);

carrinho.removerItem({ id: 2, nome: "Calça", qtd: 1, preco: 50 });
console.log(carrinho);