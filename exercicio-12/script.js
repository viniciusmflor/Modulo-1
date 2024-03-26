const inputText = document.getElementsByClassName("input")[0];
const addButton = document.getElementsByClassName("addButton")[0];
const minhaLista = document.getElementById("minhaLista");

//funcao para adicionar um item quando o botao for clicado
function addItem() {
  const newItem = document.createElement("li");
  newItem.innerText = inputText.value;
  minhaLista.appendChild(newItem);
  inputText.value = "";
}

addButton.addEventListener("click", addItem);

// for loop example
for (let i = 0; i < 5; i++) {
  console.log(i);
}
