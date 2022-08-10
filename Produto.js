function Produto(descricao, quantidadeEmEstoque, valor, loja) {
  this.descricao = descricao;
  this.quantidadeEmEstoque = quantidadeEmEstoque;
  this.valor = valor;
  this.loja = loja;
}

module.exports = Produto;
