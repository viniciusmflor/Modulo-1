// Passo-1
let distance = prompt("Qual a distancia em anos luz?");

// Conversão das distâncias
let distanceParsec = distance * 0.306601; // Correção no valor de conversão
let distanceUA = distance * 63241.1; // Correção no valor de conversão
let distanceKM = distance * 9.461e12; // Correção no valor de conversão

do {
  let optionsList = prompt(
    "Escolha a unidade para conversão: \n1: Parsec \n2: Unidade astronômica \n3: Quilômetros"
  );

  switch (optionsList) {
    case "1":
      alert(
        "A opção selecionada foi Parsec. \nO valor de " +
          distance +
          " anos luz em Parsec é " +
          distanceParsec +
          " pc."
      );
      break; // Adiciona break para sair do switch

    case "2":
      alert(
        "A opção selecionada foi Unidade astronômica. \nO valor de " +
          distance +
          " anos luz em Unidade astronômica é " +
          distanceUA +
          " UA."
      );
      break; // Adiciona break para sair do switch

    case "3":
      alert(
        "A opção selecionada foi Quilômetros. \nO valor de " +
          distance +
          " anos luz em Quilômetros é " +
          distanceKM +
          " km."
      );
      break; // Adiciona break para sair do switch

    default:
      alert("Opção inválida.");
      break; // Adiciona break mesmo no default
  }

  // Corrige o prompt para continuar retornando uma string
  continuar = confirm("Deseja realizar outra conversão?");
} while (continuar); // Ajusta a condição para continuar com base na resposta do usuário
