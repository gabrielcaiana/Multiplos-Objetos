// Criando objeto com notação de construtor, modelo para hoteis
function Hotel(nome,quartos,reservas) {
  this.nome = nome;
  this.quartos = quartos;
  this. reservados = reservas;
  this.checarReservas = function() {
    return this.quartos - this.reservas;
  }
}
//Criando instâncias de Objetos
let caianaHotel = new Hotel('Caiana', 50, 25);
let almeidaHotel = new Hotel('Almeida', 100, 30);

console.log(caianaHotel)
console.log(almeidaHotel)
