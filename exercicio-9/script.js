let velocidade = 150;

function desacelerar() {
  console.log(velocidade); // Executa a ação desejada aqui
  if (velocidade > 0) {
    velocidade -= 20;
    setTimeout(desacelerar, 1000); // Aguarda 1 segundo antes da próxima iteração
  }
  if (velocidade <= 0) {
    alert("A nave está parada, começando desembarque");
  }
}

desacelerar(); // Inicia a função de desaceleração

//codigo onebitcode
function slowDown(velocity, printer) {
  let deceleration = 20;
  while (velocity > 0) {
    printer(velocity);
    velocity -= deceleration;
  }
  alert("Nave parada. As comportas podem ser abertas.");
}
let spaceshipVelocity = 150;
slowDown(spaceshipVelocity, function (velocity) {
  console.log("Velocidade atual: " + velocity);
});
