function Animal(tipo) {
  tipo ? (this.tipo = tipo) : (Animal.prototype.tipo = "desconhecido");
}

Animal.prototype.obterTipo = function () {
  return this.tipo;
};

Animal.prototype.tipo = "Desconhecido";

function Cachorro(nome, tipo) {
  this.nome = nome;
  Animal.call(this, tipo);
 // this.constructor = Cachorro;
  Object.defineProperty(Cachorro.prototype, "constructor", { //objeto de configuração
    value: Cachorro,
    enumerable: true
  });
}

Cachorro.prototype = new Animal();

let rex = new Cachorro("Rex", "mamífero");

for (let prop in rex) {
  if (rex.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

console.log(rex instanceof Array);
console.log(Object.prototype.isPrototypeOf(rex));
console.log(Object.getPrototypeOf(rex));
console.log(rex.__proto__);
console.log(rex.__proto__ === Object.getPrototypeOf(rex));


function Animal(tipo) {
  if (this instanceof Animal) {
    tipo ? (this.tipo = tipo) : (Animal.prototype.tipo = "desconhecido");
  } else {
    throw new Error("Animal must be created with new operator");
  }
}

Animal.prototype.obterTipo = function () {
  return this.tipo;
};

Animal.prototype.tipo = "desconhecido";
let gato = new Animal("mamífero");
//ES6

class AnimalC {
  constructor(tipo) {
    if (tipo) {
      this.tipo = tipo;
    }
  }

  obterTipo() {
    return this.tipo;
  }
}

AnimalC.prototype.tipo = "desconhecido";

let animal = new AnimalC("anfíbio");
let sapo = new AnimalC();
console.log(sapo);
console.log(animal);

class GatoC extends AnimalC {
  constructor(nome) {
    super("mamífero");
    this.nome = nome;
  }
}

let mingau = new GatoC("mingau");
console.log(mingau);

function criarCachorro(name) {
  let posicao = 0;

  const obj = {
    name,
    get posicao() {
      console.log(`A posição atual de ${this.name} é ${posicao}m`);
      return posicao
    },
    set posicao(newPosition) {
      console.log(`A nova posicao de ${this.name} é ${newPosition}`);
      posicao = newPosition;
    },
  };

  Object.setPrototypeOf(obj, {
    latir() {
      console.log(this.name, "está latindo");
    },
    andar(distancia) {
      posicao += distancia;
      console.log(this.name, "andou", distancia, "m");
    },
  });

  return obj;
}

let dog1 = criarCachorro("dog1");
let dog2 = criarCachorro("dog2");

class Reptile {
  constructor(firstAppearance) {
    this.firstAppearance = firstAppearance;
  }

  get firstTimeAppearance() {
    return this.firstAppearance;
  }

  set newFirstAppearance(firstAppearance) {
    this.firstAppearance = firstAppearance;
  }
}

const smaug = new Reptile("The Hobbit");
smaug.newFirstAppearance = "New Appearance Value";
console.log(smaug.firstAppearance);


//Método replaceAll criado:
if (!String.prototype.novoReplaceAll) {
  String.prototype.novoReplaceAll = function (busca, troca) {
    if (!(busca instanceof String || busca === "string")) {
      throw Error("first parameter must be a string");
    }
    if (!(troca instanceof String || troca === "string")) {
      throw Error("first parameter must be a string");
    }

    return this.valueOf().split(busca).join(troca);
  };
}

//Método map criado:

let arr = [1, 2, 3];

if (!Array.prototype.novoMap) {
  Array.prototype.novoMap = function (callback) {
    for (i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  };
}

arr.novoMap((number) => console.log(number));

class Animal {
  constructor(tipo) {
    if (tipo) this.tipo = tipo;
    if (this.constructor === Animal) {
      throw new Error("");
    }
  }

  comer() {
    throw new Error('Method "comer ()" must be implemented');
  }
}

class Gato extends Animal {
  constructor(nome) {
    super("mamífero");
    this.nome = nome;
  }
  comer() {
    console.log(`${this.nome} está comendo!`);
  }
}

const animal = new Animal("mamífero");
const gato = new Gato("mingal");


class Animal {
  constructor(nome) {
    this.nome = nome;
    console.log("Chamando metodo estático de dentro do constructor");
    Animal.beber();
  }

  static comer() {
    console.log(this);
    console.log("comendo");
    this.beber();
  }

  static beber() {
    console.log("bebendo");
  }
}

const rex = new Animal("Rex");

class ContaBancaria {
  constructor(cliente, numero) {
    if (this.constructor === ContaBancaria) {
      throw new Error("Class 'ContaBancaria' is an abstract class!");
    }
    this.cliente = cliente;
    this.numero = numero;
    this.saldo = 0;
  }

  get dadosCliente() {
    return `${this.cliente.nome}, ${this.cliente.tipoDocumento}: ${this.cliente.documento}`;
  }

  depositar(valor) {
    this.saldo += valor;
  }
  sacar() {
    throw new Error("método sacar() precisa ser implementado!");
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(cliente, numero) {
    super(cliente, numero);
    this.limite = 0;
  }
  sacar(valor) {
    let disponivel = this.saldo + this.limite;
    if (disponivel < valor) {
      throw new Error("Saldo insuficiente!");
    }
    this.saldo -= valor;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(cliente, numero) {
    super(cliente, numero);
    this.aniversario = Date.now();
  }
  sacar(valor) {
    this.saldo -= valor;
  }
}

class Transferir {
  static execute(contaOrigem, contaDestino, valor) {
    if (
      !contaOrigem instanceof ContaBancaria ||
      !contaDestino instanceof ContaBancaria
    ) {
      throw new Error("Accounts need to inherit from ContaBancaria!");
    }
    try {
      contaOrigem.sacar(valor);
      contaDestino.depositar(valor)
    } catch (e) {
      console.log("Deu ruim!", e.message);
    }
  }
}

class Cliente {
  constructor(nome, documento, tipoDocumento) {
    if (this.constructor === Cliente) {
      throw new Error("Class 'Cliente' is an abstract class!");
    }
    this.nome = nome;
    this.documento = documento;
    this.tipoDocumento = tipoDocumento;
  }
}

class PessoaFisica extends Cliente {
  constructor(nome, documento) {
    super(nome, documento, "CPF");
  }
}

class PessoaJuridica extends Cliente {
  constructor(nome, documento) {
    super(nome, documento, "CNPJ");
  }
}

const cliente1 = new PessoaFisica("Marcus", "12.133.144-30");
const cliente2 = new PessoaJuridica("João lanches", "122.133.144/0001-01");

const marcus = new PessoaFisica("Marcus", "12.133.144-10");
const maria = new PessoaJuridica("Maria", "12.123.123/0001-01");

const cp1 = new ContaPoupanca(marcus, 1);
const cp2 = new ContaPoupanca(maria, 2);
const cc1 = new ContaCorrente(maria, 3);
console.log(cliente1);
console.log(cliente2);
console.log(cc1);
console.log(cp1);
console.log(cc1.dadosCliente);


class Person {
  age = 0;
  steps = 0;
  constructor(name, lastName = "silva") {
    this.name = name;
    this.lastName = lastName;
  }

  takeAStep() {
    this.steps++;
  }

  get fullName() {
    return this.name, this.lastName;
  }

  get age() {
    return this.age;
  }

  set age(newAge) {
    if (typeof newAge == "number") {
      this.age = newAge;
    }
  }
}

const p1 = new Person("Marcus", "Evandro");
console.log(p1);


class Person {
  age = 0;

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name, "oiiiii");
  
}
class Student extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }

  sayHello() {
    super.sayHi();
  }
}

const maria = new Student("Maria", "001-982-023.11");
maria.studentAge = 20;
console.log(maria);
console.log(`${maria.name} tem ${maria.age} anos e matrícula é: ${maria.id}`);
maria.sayHello();

class Person {
  age = 0;

  constructor(name) {
    this.name = name;
  }
}

function createPerson(name, age) {
  let p = new Person(name);
  p.age = age;
  return p;
}
let p1 = createPerson("marcus", 90);
console.log(`${p1.name} tem ${p1.age} anos.`);

class Form {
  items = [];
  method = "GET";

  constructor(container, method, action) {
    this.container = document.querySelector(container);
    this.method = method;
    this.action = action;
  }

  addItem(item) {
    this.items.push(item);
  }

  render() {
    const formElement = document.createElement("form");
    formElement.setAttribute("method", this.method);
    formElement.setAttribute("action", this.action);
    this.items.forEach((item) => {
      item.render(formElement);
    });

    this.container.appendChild(formElement);
  }
}

class Input {
  _type = "text";
  required = false;

  constructor(name, label) {
    this.name = name;
    this.label = label;
  }

  get type() {
    return this._type;
  }

  set type(t) {
    if (["text", "password", "email", "submit"].includes(t)) {
      this._type = t;
    } else {
      throw new Error(`Input ${t} type doesn't exist.`);
    }
  }

  render(formElement) {
    const el = document.createElement("input");
    el.type = this.type;
    el.name = this.name;
    el.placeholder = this.label;
    el.required = this.required;
    formElement.appendChild(el);
  }
}

class Button extends Input {
  constructor(label) {
    super("", label);
    this.type = "submit";
  }

  render(formElement) {
    let el = document.createElement("input");
    el.type = this.type;
    el.value = this.label;
    formElement.appendChild(el);

    formElement.addEventListener("submit", el => {
      el.preventDefault();
    });
  }
}

//Implementação

//Formulário
const form = new Form(".formArea", "POST", "https://site.com.br");

// Email
const email = new Input("email", "Digite seu e-mail:");
email._type = "email";
email.required = true;
form.addItem(email);

//Senha
const password = new Input("password", "Digite sua senha:");
password._type = "password";
form.addItem(password);

// Botão
const button = new Button("Enviar");
form.addItem(button);

form.render();
