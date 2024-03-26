//nome da nave
let shipName = prompt("Qual o nome da nave");

//velocidade inicial
let velocidade = 0;
let confirmar = true;

do {
  //opcao de acelerar em 5 ou desacelerar
  let list = prompt(
    "1- Acelerar em 5km/s \n2-Desacelerar em 5km/s \n3-Sair do programa"
  );

  function Acelerar() {
    if (list == "1") {
      velocidade += 5;
    } else if (list == "2") {
      if (velocidade >= 5) {
        velocidade -= 5;
      } else {
        alert("A nave não pode ter velocidade negativa");
      }
    }
    if (list == "3") {
      alert("Encerrando programa");
      confirmar = false;
    }

    alert("Nome da nave: " + shipName + "\nVelocidade atual: " + velocidade);
  }

  Acelerar();
} while (confirmar);
