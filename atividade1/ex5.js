class Aluno {
    constructor(nome, idade, peso) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
    }
  
    imprimirDados() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Idade: ${this.idade}`);
      console.log(`Peso: ${this.peso}`);
    }
  }
  
  let aluno = new Aluno('SeuNome', 20, 70.0);
  
  aluno.nome = 'NovoNome';
  aluno.idade = 21;
  aluno.peso = 72.5;
  
  aluno.imprimirDados();
  