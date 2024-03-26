//1 = A
//2 = A
//3 = A
//4 = A
//5 = A
//6 = A

//Questao 7 e 8)
class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
  }
}

class Cachorro extends Animal {
  constructor(nome, idade) {
    super(nome, idade); //pega os atributos da classe pai: "Animal"
  }
}

class Gato extends Animal {
  constructor(nome, idade, cor) {
    super(nome, idade);
    this.cor = cor;
  }

  //metodo especifico para a classe Gato
  miar() {
    console.log("Miau");
  }
}
const gato = new Gato("Mingau", 3, "Branco");
gato.descrever();
gato.miar();
const cachorro = new Cachorro("Rock", 5);
cachorro.descrever();

//Questao 9)
class SomadorDeNotas {
  constructor() {
    this.notas = []; // array de notas
  }

  adicionarNota(...nota) {
    //adicionando os 3 pontos para que possa adicionar todas as notas sem ter que chamar o metodo varias vezes com o rest parameter
    this.notas.push(...nota); //adiciona a nota no array
  }

  verTotal() {
    // se o array de notas estiver vazio
    if (this.notas.length === 0) {
      console.log("Nenhuma nota adicionada");
      return;
    } else {
      console.log(
        "Soma das notas: " + this.notas.reduce((acc, cur) => acc + cur, 0)
      ); //reduce soma todos as notas presentes no array "notas"
    }
  }
}

const notas = new SomadorDeNotas();
notas.adicionarNota(10, 5, 2, 3);
notas.verTotal();

//Questao 10)

class Funcionario {
  constructor(nome, idade, salario) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
  }

  calcularSalario() {
    return this.salario;
  }
}

//Questao 10
//classe Professor que herda de Funcionario
class Professor extends Funcionario {
  constructor(nome, idade, disciplina, horasDeAula) {
    super(nome, idade); //herda o nome e idade declarados em "Funcionario"
    this.disciplina = disciplina;
    this.horasDeAula = horasDeAula;
  }

  calcularSalario() {
    let valorDaHora = 90;
    return (
      "O salario mensal de " +
      this.nome +
      " é: " +
      this.horasDeAula * valorDaHora
    );
  }
}

//Nomes apenas para demonstracao, qualquer semelhanca é mera coincidencia!!
const Kizzy = new Professor("Kizzy", 25, "Computacao", 120); //coloquei horas de aula por mes no lugar de "por semana"
const Bruna = new Professor("Bruna", 23, "UX", 160);

console.log(Kizzy.calcularSalario());
console.log(Bruna.calcularSalario());
