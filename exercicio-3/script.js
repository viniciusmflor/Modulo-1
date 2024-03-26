//nome do pioto
let pilotName = prompt("Qual o nome do piloto?");

//velocidade inicial
let speed = 0;
alert("Velocidade inicial igual a: " + speed);

let changeSpeed = true; // Flag para controlar o loop

do {
  let whichSpeed = prompt("A que velocidade você gostaria de acelerar a nave?");
  speed = whichSpeed;

  let confirmation = confirm(
    "A velocidade da nave irá para " + whichSpeed + " km/s, deseja confirmar?"
  );

  if (confirmation === true) {
    speed = whichSpeed; // Atualiza a velocidade se confirmado
    alert("A nave está em " + speed + " km/s");
  } else {
    alert("Mudança de velocidade cancelada.");
  }

  // Verificações de velocidade
  if (speed == 0) {
    alert("A nave está parada. Considere aumentar a velocidade.");
  } else if (speed < 40) {
    alert("Você está devagar, podemos aumentar mais.");
  } else if (speed >= 40 && speed < 80) {
    alert("Parece uma boa velocidade para manter.");
  } else {
    alert("Velocidade alta! Considere diminuir.");
  }

  // Pergunta ao usuário se deseja alterar a velocidade novamente
  changeSpeed = confirm("Deseja alterar a velocidade novamente?");
} while (changeSpeed);

alert("Nome do piloto: " + pilotName + "\nVelocidade atual: " + speed);
