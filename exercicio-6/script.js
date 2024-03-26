//serve para controlar o loop
let continuar;

do {
  // Nome inicial
  let shipName = prompt("Qual o nome da espaçonave?");

  // Letra da palavra para trocar
  let letraParaSubstituir = prompt(
    "Qual caracter da palavra " + shipName + " deseja substituir?"
  );

  // Novo nome da nave
  let newShipName = "";

  // Qual letra deve ser inserida no lugar da outra
  let novaLetra = prompt(
    "Por qual caracter deseja substituir o caracter: " + letraParaSubstituir
  );

  for (let i = 0, maxI = shipName.length; i < maxI; i++) {
    if (shipName[i] == letraParaSubstituir) {
      newShipName += novaLetra;
    } else {
      newShipName += shipName[i];
    }
  }

  alert("O novo nome da nave ficou: " + newShipName);

  // Pergunta ao usuário se deseja realizar outra alteração
  continuar =
    prompt("Deseja alterar o nome de outra nave? (sim/nao)") === "sim";
} while (continuar);

//Resolucao onebitcode
let spaceship = prompt("Digite o nome da nave");

let charToReplace = prompt("Qual caracter você deseja substituir?");

let replacementChar = prompt("Por qual caracter você deseja substituir?");

let newSpaceship = "";

for (let pos = 0; pos < spaceship.length; pos++) {
  if (spaceship[pos] == charToReplace) {
    newSpaceship += replacementChar;
  } else {
    newSpaceship += spaceship[pos];
  }
}

alert("O novo nome da nave é " + newSpaceship);
