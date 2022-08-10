function cliente(nome, idade, pedidos, endereco, telefone, email) {
  this.nome = nome;
  this.idade = idade;
  this.endereco = endereco;
  this.email = email;
  this.telefone = telefone;
  this.pedidos = pedidos;
}

module.exports = cliente;
