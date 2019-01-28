  // Criando objeto com notação de construtor, modelo para hoteis
  function Hotel(nome,quartos,reservas) {
    this.nome = nome;
    this.quartos = quartos;
    this. reservados = reservas;
    this.checarReservas = function() {
      return this.quartos - this.reservados;
    };
  }
  //Criando instâncias de Objetos
  let caianaHotel = new Hotel('Caiana', 50, 25);
  let almeidaHotel = new Hotel('Almeida', 100, 30);

  //Obtendo id e exibindo na página para o usuário
  let detalhesHotelCaiana = caianaHotel.nome + ' quartos: ';
      detalhesHotelCaiana += caianaHotel.checarReservas();
  let elHotel = document.getElementById('hotel1');
  elHotel.textContent = detalhesHotelCaiana;

  let detalhesHotelAlmeida = almeidaHotel.nome + ' quartos: ';
      detalhesHotelAlmeida += almeidaHotel.checarReservas();
  let elHotel2 = document.getElementById('hotel2');
  elHotel2.textContent = detalhesHotelAlmeida;
