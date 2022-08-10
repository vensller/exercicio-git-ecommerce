function Loja(loja, site, endereco, cnpj, telefone, email,produto) {
  this.nome = loja;
  this.site = site;
  this.endereco = endereco;
  this.cnpj = cnpj;
  this.telefone = telefone;
  this.email = email;
  this.produto = produto;
}
module.exports = Loja;

