// Criando objeto com notação de construtor, modelo para hoteis
function Hotel(nome,quartos,reservas) {
  this.nome = nome;
  this.quartos = quartos;
  this. reservados = reservas;
  this.checarReservas = function() {
    return this.quartos - this.reservas;
  }
}
