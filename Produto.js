function Produto(descricao, loja, quantidadeEmEstoque, valor) {
  this.descricao = descricao;
  this.quantidadeEmEstoque = quantidadeEmEstoque;
  this.loja = loja;
  this.valor = valor;
}

module.exports = Produto;
