function Pedido(
  produtos,
  numeroPedido,
  valorTotal,
  dataPedido,
  metodoPagamento,
  frete,
  previsaoEntrega,
  nrNotaFiscal,
  cliente,
  cupomDesconto
) {
  this.produtos = produtos;
  this.numeroPedido = numeroPedido;
  this.valorTotal = valorTotal;
  this.dataPedido = dataPedido;
  this.metodoPagamento = metodoPagamento;
  this.frete = frete;
  this.previsaoEntrega = previsaoEntrega;
  this.nrNotaFiscal = nrNotaFiscal;
  this.cliente = cliente;
  this.cupomDesconto = cupomDesconto;
}

module.exports = Pedido;
