function Loja(loja, site, produtos, endereco, cnpj, telefone, email) {
  this.nome = loja;
  this.produtos = produtos;
  this.site = site;
  this.endereco = endereco;
  this.cnpj = cnpj;
  this.telefone = telefone;
  this.email = email;
}
module.exports = Loja;
