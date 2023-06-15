class Pessoa {
  constructor(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
}

class Funcionario extends Pessoa {
  constructor(nome, sobrenome, idade, cargo, salario) {
    super(nome, sobrenome, idade);
    this.cargo = cargo;
    this.salario = salario;
  }
}

class Programador extends Funcionario {
  linguagemDeProgramacao = "JavaScript";

  apresentar() {
    console.log(`Olá! Me chamo ${this.nome} ${this.sobrenome}, atualmente com ${this.idade} anos. Trabalho como ${this.cargo}, atuando
principalmente em ${this.linguagemDeProgramacao} e ganho R$ ${this.salario} por mês.`);
  }
}

class Designer extends Funcionario {
  tipoDeDesign = "UX";

  apresentar() {
    console.log(`Olá! Me chamo ${this.nome} ${this.sobrenome}, atualmente com ${this.idade} anos. Trabalho como ${this.cargo}, atuando
principalmente em ${this.tipoDeDesign}, ganhando R$ ${this.salario} por mês.`);
  }
}

class Gerente extends Funcionario {
  departamento = "Desenvolvimento";

  apresentar() {
    console.log(`Olá! Me chamo ${this.nome} ${this.sobrenome}, atualmente com ${this.idade} anos. Trabalho como ${this.cargo}, atuando
principalmente no departamento ${this.departamento}, ganhando R$ ${this.salario} por mês.`);
  }
}
