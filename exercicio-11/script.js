// A nave é um objeto
let ship = { name: "", type: "", maxSpeed: 0 };

ship.name = prompt("Qual o nome da nave?");
ship.type = prompt("Qual o tipo da nave?");
ship.maxSpeed = Number(prompt("Qual a velocidade máxima da nave?")); // Convertendo para número

// Velocidade inicial
let velocidade = 0;

let menu; // Declaração mantida aqui

console.log(ship);

do {
  menu = Number(prompt("1- Acelerar \n2- Parar")); // Removido 'let' para usar a variável do escopo externo

  if (menu === 1) {
    // Acelerar a nave
    let maisVelocidade = Number(prompt("Deseja acelerar quanto?"));
    velocidade += maisVelocidade;
    alert("Velocidade atual: " + velocidade);

    if (velocidade > ship.maxSpeed) {
      // Coloca a velocidade da nave na velocidade máxima permitida
      alert("A nave só consegue ir até " + ship.maxSpeed + " km/h.");
      velocidade = ship.maxSpeed;
    }

    if (velocidade == ship.maxSpeed) {
      alert("Voce está na velocidade máxima!");
    }
  }
} while (menu !== 2);

alert(
  "Nome: " +
    ship.name +
    "\nTipo: " +
    ship.type +
    "\nParou na velocidade: " +
    velocidade
);
