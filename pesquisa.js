// Classes em JavaScript:

//Uma classe em JavaScript é um modelo (ou blueprint) que define um tipo de objeto.
//Ela permite agrupar dados (atributos) e comportamentos (métodos) relacionados em uma única estrutura.
//As classes são usadas para criar instâncias de objetos, cada uma com suas próprias propriedades e métodos.

//Estrutura Básica:

//Definição: Usamos a palavra-chave class seguida pelo nome da classe.
//Construtor: Um método especial chamado constructor, que inicializa os atributos da classe quando uma instância é criada.
//Atributos: Propriedades que representam o estado do objeto.
//Métodos: Funções que definem o comportamento do objeto.

//Exemplo

class Carro {
  constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
  }

  mostrarDetalhes() {
      return `${this.marca} ${this.modelo}, ano ${this.ano}`;
  }
}

//Benefícios:

//Encapsulamento: Agrupa dados e comportamentos relacionados.
//Reutilização: Permite criar múltiplas instâncias com o mesmo comportamento.
//Organização: Facilita a manutenção e leitura do código.


//Objeto em JavaScrip:

//Um objeto em JavaScript é uma coleção de propriedades, onde cada propriedade é uma associação entre uma chave (ou nome) e um valor. 
//Os objetos permitem agrupar dados e funcionalidades relacionadas, representando entidades do mundo real.

//Estrutura Básica:

//Chaves (ou Propriedades): Nomes que identificam cada item dentro do objeto.
//Valores: Dados que podem ser de qualquer tipo (números, strings, arrays, funções, etc.).



//Exemplo de Objeto

const pessoa = {
  nome: 'Alice',
  idade: 30,
  saudacao: function() {
      return `Olá, meu nome é ${this.nome}`;
  }
};

//Características:

//Dinâmicos: Você pode adicionar, modificar ou remover propriedades em um objeto a qualquer momento.
//Referência: Objetos são manipulados por referência, ou seja, duas variáveis podem apontar para o mesmo objeto na memória.

//Benefícios

//Estruturação: Facilita a organização e manipulação de dados complexos.
//Encapsulamento: Agrupa dados e comportamentos em uma única unidade.


//Atributos em JavaScript:

//Atributos (ou propriedades) em JavaScript são pares de chave-valor que representam características ou dados de um objeto.
//Cada atributo possui um nome (ou chave) e um valor associado, que pode ser de qualquer tipo de dado (string, número, array, função, etc.).

//Características:

//Estrutura: Atributos são definidos dentro de objetos e são acessados usando a notação de ponto (objeto.atributo) ou a notação de colchetes (objeto['atributo']).
//Dinamicidade: Atributos podem ser adicionados, modificados ou removidos a qualquer momento durante a execução do código.
//Escopo: Atributos podem ser públicos (acessíveis de fora do objeto) ou privados (acessíveis apenas dentro do objeto).

//Exemplo:

const carro = {
  marca: 'Ford',
  modelo: 'Fiesta',
  ano: 2021
};

//Neste exemplo, marca, modelo e ano são atributos do objeto carro, que armazenam informações sobre ele.


//Método em JavaScript:

//Um método em JavaScript é uma função que é associada a um objeto. Métodos definem comportamentos que podem ser executados por esse objeto. Eles podem manipular os dados do objeto e interagir com outros métodos e atributos.

//Características:

//Definição: Métodos são definidos como propriedades do objeto, e seu valor é uma função.
//Acesso ao Objeto: Dentro de um método, você pode usar a palavra-chave this para se referir à instância atual do objeto.
//Chamadas: Métodos são chamados usando a notação de ponto, por exemplo, objeto.metodo().

//Exemplo

const carro = {
  modelo: 'Fusca',
  acelerar: function() {
      console.log('Acelerando o ' + this.modelo);
  }
};

carro.acelerar(); // Saída: "Acelerando o Fusca"

//Neste exemplo, acelerar é um método do objeto carro, que exibe uma mensagem ao ser chamado.


//Herança em JavaScript:

//Herança em JavaScript é um conceito da programação orientada a objetos que permite que uma classe (chamada de classe filha ou derivada) herde propriedades e métodos de outra classe (chamada de classe pai ou base). Isso facilita a reutilização de código e a criação de hierarquias de classes.


//Características:

//Reutilização de Código: Classes filhas podem usar métodos e atributos da classe pai, evitando a duplicação de código.
//Sobrescrita de Métodos: Uma classe filha pode sobrescrever métodos da classe pai para fornecer comportamentos específicos.
//Hierarquia: Permite organizar classes de forma hierárquica, refletindo relacionamentos do mundo real.

//Exemplo

class Animal {
  falar() {
      return 'O animal faz um som.';
  }
}

class Cachorro extends Animal {
  falar() {
      return 'O cachorro late.';
  }
}

//Neste exemplo, Cachorro herda de Animal, e pode usar ou modificar o método falar.


//Polimorfismo em JavaScript

//Polimorfismo é um princípio da programação orientada a objetos que permite que diferentes classes implementem métodos com o mesmo nome, mas com comportamentos distintos.
//Isso significa que um único método pode operar em diferentes tipos de objetos.

//Características

//Flexibilidade: Permite que funções aceitem argumentos de diferentes classes e chamem o método correspondente, sem precisar saber o tipo específico do objeto.
//Sobrescrita de Métodos: Classes derivadas podem sobrescrever métodos da classe base, proporcionando comportamentos específicos.
//Interface Comum: As classes podem ser tratadas de forma intercambiável, desde que compartilhem a mesma interface ou método.

//Exemplo

class Animal {
  falar() {
      return 'O animal faz um som.';
  }
}

class Cachorro extends Animal {
  falar() {
      return 'O cachorro late.';
  }
}

class Gato extends Animal {
  falar() {
      return 'O gato mia.';
  }
}

function fazerSom(animal) {
  console.log(animal.falar());
}


//Neste exemplo, a função fazerSom pode receber tanto um Cachorro quanto um Gato, e chamará o método falar() correspondente de cada classe.