// posicao 0 = Nome
//posicao 1 = Tripulantes
//posicao 2 = Engate concluido ou nao

const ships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false],
];

//mais de 9 tripulantes
function moreThanNine(ships) {
  const resultado = ships.filter((ship) => ship[1] > 9);
  if (resultado.length > 0) {
    return (
      "As naves que possuem mais de nove tripulantes são: \n" +
      resultado.map((ship) => ship[0]).join("\n")
    );
  } else {
    return "Não há naves com mais de nove tripulantes.";
  }
}

//engatePendente
function engatePendente(ships) {
  const pendente = ships.find((ship) => ship[2] === false);
  if (pendente) {
    return "A primeira nave com engate pendente é: " + pendente[0];
  } else {
    return "Não há naves com engate pendente.";
  }
}

let shipNames = ships.map((ship) => ship[0].toUpperCase());
let info = moreThanNine(ships) + "\n" + engatePendente(ships);
alert(`Todas as naves são ${shipNames.join(", ")}. \n\n${info}`);
