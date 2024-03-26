//Nome da nave
let shipName = prompt("Qual o nome da nave?");
let continuar = true;
let contagem = 0;

while (continuar === true) {
  let yesOrNo = prompt("Deseja entrar numa dobra espacial? (sim/nao)");
  switch (yesOrNo) {
    case "sim":
      alert(`A nave ${shipName} está prestes a entrar em uma dobra espacial.`);
      contagem++;
      break;
    case "nao":
      alert("A nave nao entrará numa dobra espacial");
      continuar = false;
      break;
  }
  alert(
    `A nave ${shipName} fez ${contagem} tentativas para entrar numa dobra espacial`
  );
}
