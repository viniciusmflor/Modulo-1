let ageDifference;
let olderPerson;
let youngerPerson;

//pessoa 1

let name1 = prompt("Qual o seu nome 1");
let age1 = prompt("Qual a sua idade 1");

//pessoa 2
let name2 = prompt("Qual o seu nome 2?");
let age2 = prompt("Qual a sua idade 2?");

//calculando a diferenca de idade
if (age1 > age2) {
  olderPerson = "nome: " + name1 + "\nidade: " + age1;
  youngerPerson = "nome: " + name2 + "\nidade: " + age2;
  ageDifference = age1 - age2;
  alert("A diferenca de idade é " + ageDifference);
}

if (age2 > age1) {
  olderPerson = "nome: " + name2 + "\nidade: " + age2;
  youngerPerson = "nome: " + name1 + "\nidade: " + age1;
  ageDifference = age2 - age1;
  alert("A diferenca de idade é " + ageDifference);
}

if (age1 === age2) {
  ageDifference = 0;
  alert("Voces tem a mesma idade");
  olderPerson = "Nao tem pessoa mais velha!";
  youngerPerson = "Nao tem pessoa mais nova!";
}

alert(
  "Pessoa mais velha: " +
    olderPerson +
    "\nPessoa mais nova:  " +
    youngerPerson +
    "\nDiferenca de idade: " +
    ageDifference
);
