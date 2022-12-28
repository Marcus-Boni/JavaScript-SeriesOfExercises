let car = {
  name: "Toro",
  brand: "Fiat",
  colors: "red, blue, brown",
  isRunning: false,
  run: function () {
    this.isRunning = true;
    return `O ${this.name} está em movimento`;
  },
  stop: function () {
    this.isRunning === false ? this.isRunning : (this.isRunning = false);
    return `O ${this.name} está parado`;
  },
  getColorsMessage: function () {
    return `O ${this.name} está disponível nas cores ${this.colors}`;
  },
};

car.run();

car.isRunning === true
  ? console.log("Está em movimento!")
  : console.log("não está em movimento!");

car.stop();

car.isRunning === false
  ? console.log("Está parado")
  : console.log("Está em movimento");

console.log(car.colors);


console.log(`O carro é um ${car.brand} ${car.name}`);

function verify ( {colors, name, brand, run, stop, getColorsMessage} ) {
  console.log(name);
  console.log(brand);
  console.log(colors);
  console.log(run());
  console.log(stop);
  console.log(getColorsMessage);
}

verify(car)
 

 const best2019Movies = [
  { title: "Parasita", directedBy: "Bong Joon-ho" },
  { title: "Bacurau", directedBy: "Kleber Mendonça Filho" },
  { title: "O Irlandês", directedBy: "Martin Scorsese" },
  { title: "Entre Facas e Segredos", directedBy: "Rian Johnson" },
  { title: "Turma da Mônica: Laços", directedBy: "Daniel Rezende" },
  { title: "Homem-Aranha: No Aranhaverso", directedBy: "Peter Ramsey" },
  { title: "Klaus", directedBy: "Sergio Pablos" },
  { title: "Fora de Série", directedBy: "Olivia Wilde" },
  { title: "Shazam", directedBy: "David F. Sandberg" },
  { title: "História de um Casamento", directedBy: "Noah Baumbach" },
  { title: "Varda por Agnès", directedBy: "Agnès Varda" },
  { title: "A Vida Invisível", directedBy: "Karim Aïnouz" },
];

best2019Movies.forEach((el) => {
  return console.log(`${el.title}, dirigido por ${el.directedBy}`);
}); 
 
const youtubeUser = {
  name: "Roger Melo",
  chanelUrl: "https://www.youtube.com/channel/UCmjDevp9Y8r-qi-xueD3Izg",
  videos: {
    total: 111,
    recentVideos: [
      {
        title: "Introdução ao TDD - Parte 02 | JavaScript | Jest",
        length: "28:28",
      },
      { title: "Introdução ao TDD | JavaScript | Jest", length: "19:29" },
      { title: "Higher-order Functions | JavaScript", length: "47:38" },
    ],
  },
  about: {
    description:
      "🔥 Ensino as pessoas a alcançarem a fluência em JavaScript! 🔥",
    socialNetworks: {
      twitter: "https://twitter.com/rogermelodev",
      gitHub: "https://github.com/Roger-Melo",
    },
    country: "Brasil",
  },
};

const titleOfRecentVideos = youtubeUser.videos.recentVideos;

const title = titleOfRecentVideos.map((item) => {
  return item;
});

console.log(title);
 

 const _this = this;
console.log(_this); 

 let obj = {
  name: "marcus",
  idade: 18,
};

function teste(str, n) {
  console.log(this.name);
  console.log(this);
  console.log(this.idade);
  console.log(str);
  console.log(n);
  return "sim";
}

teste.call(obj, "dis", 3);
teste.apply(obj, ['tis', 4])
const teste2 = teste.bind(obj, ...["dis", 3]);

console.log(teste2()); 

 const teste = (function (n) {
  return function testeInterno() {
    console.log("testeInterno chamado ", n++);
    return "retorno de testeInterno " + n;
  };
})(10);

console.log(teste());
 

 const calc = {
  value: 0,
  soma(n) {
    this.value += n;
    return this
  },
  subtrai(n) {
    this.value -= n;
  },
  log() {
    this.value
  }
};

console.log(calc.soma(5).log());
console.log(calc) 

 const calc = {
  value: 0,
  soma(n) {
    this.value += n
    return this
  },
  subtrai(n) {
    this.value -= n
    return this
  },
  log() {
    console.log(this.value);
    return this
  }
}

calc.soma(5).soma(5).subtrai(2).log() 

 const revealPattern = (function () {
  let n = 0;

  function checkNumber(n) {
    if(typeof n !== "number") {
      throw TypeError('olha, esse numero não é número!')
    }
  }
  function somar(_n) {
    checkNumber(_n)
    n += _n;
    return this
  }

  function subtrair(_n) {
    checkNumber(_n)
    n -= _n;
    return this
  }

  function log() {
    console.log(n);
  }

  return {
    somar,
    subtrair,
    log

  };
})();

revealPattern.somar(5).somar(2743).subtrair(2700)
revealPattern.log() 
 
const firstNumber = 8.3;

console.log(Math.ceil(firstNumber));

const secondNumber = 3.5

console.log(Math.round(secondNumber));

const thirdNumber = 8.9

console.log(thirdNumber.toString().charAt(0));

const randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber); 

 const getCatInfo = () => {
  const name = 'Marcos'
  let age = 3
  const color = 'Cinza'
  return {
    name,
    age,
    color
  }
}

console.log(
  getCatInfo().name + ' é um gato ' + getCatInfo().color + ' de ' + getCatInfo().age + ' anos'
); 

 const external = () => {
  const movie = "Parasite";
  const internal = () => {
    const extraInternal = () => {
      console.log(movie.toUpperCase());
    };
    extraInternal();
  };
  internal();
};

external(); 

 let randomNumbers = [3, 2, 1];
console.log(randomNumbers.reverse());

let crazyArray = [
  { prop1: "1", prop2: "2" },
  function getMessage() {
    return "hi";
  },
  [5, 96, 53]
];

crazyArray.shift()
console.log(crazyArray.join(', '));

 
 
const dogs = [
  { name: "Olivia", age: 3, gender: "Female", breed: "Maltês" },
  { name: "Zé", age: 2, gender: "Male", breed: "Pug" },
  { name: "Jade", age: 4, gender: "Female", breed: "Shiba inu" },
  { name: "Zequinha", age: 7, gender: "Male", breed: "Poodle" },
  { name: "Xica", age: 6, gender: "Female", breed: "Chihuahua" },
];

let zequinha = dogs.find((dog) => {
  return dog.name === "Zequinha";
});

console.log(zequinha);

let numbers = [1, 2, 3];
let num = numbers.find((num) => num >= 3);

console.log(num);
 

 function calc(num) {
  let anterior = num - 1
  let avançado = num + 1
  return `Vizinhos: ${anterior} e ${avançado}`
}

console.log(calc(15));
 
 
const h1 = document.querySelector("h1");
h1.textContent = h1.textContent.toUpperCase();
console.log(window.getComputedStyle(h1));

const ul = document.querySelector(".numbers");
const numbers = [53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55];
const link = document.querySelector(".link");

link.setAttribute(
  "href",
  "https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo"
);

if (link.classList.contains("link")) {
  link.classList.remove("link");
}

document.body.classList.add("body-background");

document.body.classList.remove("body-background");
numbers.forEach((el) => {
  const li = document.createElement("li");
  li.innerText = el;
  li.classList.add("number");
  ul.append(li);

  const numberOfLi = Number(li.textContent);

  if (numberOfLi % 2 === 0) {
    li.style.backgroundColor = "lightblue";
  } else {
    li.style.backgroundColor = "pink";
  }
});
 

 const ul = document.querySelector(".videos");
const ulChildrens = [...ul.children];
ulChildrens.forEach((el) => el.classList.add("video"));

console.log(ulChildrens);

const h2 = document.querySelector("h2");
const h1 = document.querySelector("h1");

console.log(h2.parentElement);
console.log(h1.nextElementSibling);
console.log(ul.previousElementSibling);

const lis = [...ul.querySelectorAll("li")];
lis.forEach((li) => li.addEventListener("click", () => console.log(li)));

const videos = [
  {
    name: "Como o promise all funciona | JavaScript",
    length: "00:01:52",
  },
  {
    name: "Como refatorar um for loop | JavaScript",
    length: "00:04:18",
  },
  {
    name: "Como fazer requisições HTTP com o método fetch | JavaScript",
    length: "00:02:55",
  },
];

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let names = videos.map((video) => video.name);

  lis.forEach((li) => {
    li.textContent = names[0];
  });
});

h1.addEventListener("click", () => {
  if (document.body.hasChildNodes) {
    let bodyChildren = [...document.body.children];

    bodyChildren.forEach( el => el.remove())
  }
}); 
 
const div = document.querySelector("div");
const elementsInsideDiv = Array.from(div.children);
const h2 = document.createElement("h2");
const eggDiv = document.querySelector(".egg");

document.body.insertBefore(h2, div.nextElementSibling);

elementsInsideDiv.forEach((element) => {
  element.addEventListener(
    "click",
    (el) => (h2.innerHTML += `Clicou no ${el.target.nodeName}, filho da div.`)
  );
});

div.addEventListener("click", () => {
  h2.innerHTML += "Clicou na div.";
});

h2.addEventListener("copy", () => console.log("h2 copiado!"));

eggDiv.addEventListener("mousemove", (egg) => {
  eggDiv.innerText = `Eixo X: ${egg.clientX} | Eixo Y ${egg.clientY}`;
});

document.querySelector("button").addEventListener("click", () => {
  eggDiv.style.backgroundColor = "lightgoldenrodyellow";
});

const people = [
  { id: 1, name: "Pedro Henrique", profession: "Dentista" },
  { id: 2, name: "Fábio Alexandre", profession: "Físico" },
  { id: 3, name: "Thiago Ferreira", profession: "Veterinário" },
  { id: 4, name: "Marcelo Antonio", profession: "Matemático" },
  { id: 5, name: "Camilla Midori", profession: "Engenheira Civil" },
  { id: 6, name: "Gustavo D'Aqui", profession: "Gerente de Marketing" },
  { id: 7, name: "Ana Paula", profession: "Front-end developer" },
  { id: 8, name: "Matheus Manucci", profession: "Piloto" },
  { id: 9, name: "Hamilton Silva", profession: "Advogado" },
];

people.forEach((el) => {
  const elementExist = el.profession === "Front-end developer";

  if (elementExist) {
    console.log("O array people contém, no mínimo, um(a) Front-end developer.");
  }
}); 

 const form = document.querySelector("form");

const formEvent = (e) => {
  e.preventDefault();
  console.log(e.currentTarget.firstElementChild.value);
};

form.addEventListener("submit", formEvent);
 
 
const form = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

const formEvent = (e) => {
  e.preventDefault();

  const title = form.inTitulo.value;
  const duration = Number(form.inDuracao.value);
  const horas = Math.floor(duration / 60);
  const minutos = duration % 60;

  resp1.innerText = title;
  resp2.innerText = `${horas} horas e ${minutos} minutos.`;
};

form.addEventListener("submit", formEvent);
 

 form.addEventListener("submit", (e) => {
  e.preventDefault();
  const medicine = form.inTitulo.value;
  const price = Number(form.inPreco.value);

  resp1.innerText = `Promoção de ${medicine}`;
  resp2.innerText = `Leve 2 por apenas: R$ ${Math.floor(price * 2)}`;
}); 

 const form = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const produto = form.inTitulo.value;
  const valor = Number(form.inPreco.value);
  const unicoValor = valor * 0.5;
  const novoValor = valor * 3 - unicoValor;

  resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${novoValor}`;
  resp2.innerText = `O 3 produto custa apenas: R$: ${unicoValor}`;
});
 

 const prompt = require("prompt-sync")();
const num1 = Number(prompt("1 Número:"));
const num2 = Number(prompt("2 Número:"));
const soma = num1 + num2;
console.log("A soma é: " + soma);
 

 function criarCachorro(name) {
  let posicao = 0;
  return {
    name,
    latir() {
      console.log(`${this.name} au au au`);
    },
    andar(distancia) {
      posicao += distancia;
      console.log(`${this.name} andou ${distancia} m`);
    },
    pegaPosiçao() {
      return console.log(posicao);
    }
  };
}

const rex = criarCachorro("Rex");

rex.latir();
rex.andar(5);
rex.andar(5);
rex.pegaPosiçao()

console.log(rex);
 

function calcularImovel(metragem, quartos) {
    switch (quartos) {
        case 2:
            return metragem * 1.2
        break;
        case 3:
            return metragem * 1.5
        break;
        default:
            return metragem * 1
        break;
    }
}


function calcularImovel(metragem, quartos) {
   let m2 = 3000

   if (quartos == 1) {
    return metragem * (m2 * 1);
   } else if (quartos == 2) {
    return metragem * (m2 * 1.2);
   } else if (quartos >= 3) {
    return metragem * (m2 * 1.5);
   } else {
    console.log("Erro na leitura do cartão")
   }
}

function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0

    if (quartos === 1) {
        preco = metragem * (m2 * 1);
    } else if (quartos === 2) {
        preco = metragem * (m2 * 1.2);
    } else if (quartos === 3) {
        preco = metragem * (m2 * 1.5);
    } else {
        console.log ("Algo de errado foi identificado na leitura do produto!")
    } 
    return preco
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);



 function validar(usuario, senha) {
    if (usuario == 'pedro' && senha == 123) {
        return true
    } else {
        return false
    }
}
 let usuario = 'bonieky';
 let senha = '1234';
 let validacao = validar(usuario, senha);
 if (validacao) {
    console.log('Acesso concedido');
 } else {
    console.log('Acesso NEGADO!');
 } 

function validar(usuario, senha) {
    let validation = (usuario === 'pedro') && (senha === '123') ? true : false;
    return validation
}

 let usuario = 'pedro';
 let senha = '1234';
 let validacao = validar(usuario, senha);
 if (validacao) {
    console.log('Acesso concedido.');
 } else {
    console.log('Acesso NEGADO!');
 }

//function square(x) {
//   return x * x
//}


function squares (a, b) {
    square = (x) => (x * x);
    return square(a) + square(b);
}
console.log(squares(2, 2));

let lista = ['marcus', 89, true];
console.log(lista[2]);

let lista = [
    'sal',
    'açúcar',
    'ovo',
    'fermento'
];
lista.push('peidei');
console.log(lista);
console.log(`Total de ingredientes compostos neste bolo: ${lista.length}`); 

1.
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1
console.log(carros[x]);
2.
carros[1] = 'Audi';
console.log('Lista com o carro Audi: ')
console.log(carros);
3.
carros.push('Volvo');
console.log('Lista com o carro Volvo: ')
console.log(carros);
4.
console.log(carros.length);

let personagem = {
    nome: 'Marcus',
    idade: 18,
    pais: 'Brasil',
    habilidades: {
        força: 20,
        inteligencia: 90,
        peidei: ['rosa', ' azul']
    }
}

personagem.nome = 'Bonieky'
console.log(`${personagem.nome}`)
personagem.habilidades.peidei.push(' verde');
console.log(`${personagem.habilidades.peidei}`);


let pessoa = {
    nome: 'Marcus',
    sobrenome: 'Boni',
    idade: 18,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomeCompleto()); 

let cores = [
    { nome: 'preto', qt: 15 },
    { nome: 'azul', qt: 20 },
    { nome: 'verde', qt: 30 }
];

for (let n = 0; n < cores.length; n++) {
    console.log(`${cores[n]}`)
}

for (kaguei in cores) {
    console.log(`A cor: ${cores[kaguei].nome} está na posição ${[kaguei]}`);
}

for (let cor of cores) {
    console.log(`Nome da cor: ${cor.nome} e quantidade dela: ${cor.qt}`)
}


document.getElementById("peidei").innerHTML = "fósforo";
document.write('Peidei')
window.alert('Opa, eu estou funcionando meu amigo!')


function digitou(ak) {
    if (ak.keyCode == 13) {
        let text = document.getElementById("campo").value;
        console.log(text)
    }
}

function azul() {
    limpar()
    document.getElementById("peidei").classList.add('azul')
}
function vermelho() {
    limpar()
    document.getElementById("peidei").classList.add('vermelho')
}
function verde() {
    limpar()
    document.getElementById("peidei").classList.add('verde')
}

function limpar () {
    document.getElementById("peidei").classList.remove("azul");
    document.getElementById("peidei").classList.remove("vermelho");
    document.getElementById("peidei").classList.remove("verde");
}

function changeWeather() {
    limpar()
    document.getElementById('container').classList.add("dark");
}
function changeEather_white() {
    limpar()
    document.getElementById('container').classList.add('white');
}
function limpar() {
    document.getElementById("container").classList.remove('dark');
    document.getElementById("container").classList.remove('white');
}

function goTosite () {
    document.getElementById('btn').style.display = ("none");
    document.getElementById('container_area').style.display = ("block");
}
function dissapear () {
    document.getElementById('logo').style.display = 'none';
    document.getElementById('container_area').style.display = ("none");
}
function showUp () {
    document.getElementById('logo').style.display = 'block';
}

let carros = {
    nome: 'fiat',
    modelo: 'toro',
    peso: '1tonelada',
    ligado: false,
    ligar: function() {
        this.ligado = true;
        console.log('VRUM VRUM VRUM!')
    },
    acelerar: function() {
        if (this.ligado == true) {
            console.log('ririhrirhririririrhr');
        } else {
            console.log(`O ${carros.nome} de modelo chamado ${carros.modelo} Não está ligado!`);
        }
    }
};

carros.acelerar();

function toggle () {
   let menu = document.getElementById('menu_area');
    if (menu.style.width === '200px' ) {
        return menu.style.width = '0px';
    } else {
        return menu.style.width = '200px';
    }
}

function toggle() {
    let menuArea = document.getElementById('menu_area');

    if (menuArea.classList.contains('menu_oppened') == true) {
        menuArea.classList.remove('menu_oppened');
    } else {
        menuArea.classList.add('menu_oppened');
    }
} 
let dia = 6;
let diaName = '';

switch(dia) {
    case 6:
    case 7:
        diaNome = 'Final de semana';
        break;
        default:
            diaNome = 'Dia de semana';
            break;
}
document.getElementById("dia").innerHTML = "Hoje é "+ diaNome;

let carros = ['Ferrari', 'Toro', 'Palio', 'Corolla'];
let html = '<ul>';

for (let i in carros) {
    html += '<li>'+ carros[i] + '</li>';
}

html += '</ul>';

document.querySelector('#dia').innerHTML = html; 

let fruits = ['Maça', 'Uva', 'Banana'];
for (i of fruits) {
    console.log(`Aqui está uma fruta: ${[i]}`)
}

let number = 1;
while (number <= 100 ) {
    console.log(`${number}`)
    number++
}

let fruits = ['Banana', 'Maça', 'Uva', 'Pera'];

fruits.pop();
fruits.push('u');
fruits[fruits.length - 1] = 'ksgou';
console.log(fruits);

let numbers = [9, 2, 3, 4, 6];
numbers.sort();
numbers.reverse()
console.log(numbers);


let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrrari', year: 2020}
]
cars.sort((a, b) => { //a neste caso é o fiat e 'b' é o BMW.
    return b.year - a.year //ele analisa um por um
})
cars.sort()

console.log(cars);
/
let fruits = ['Banana', 'Maça', 'Uva', 'Pêra'];
let ok = fruits.every((item) => {
    return item.length > 3;
})
if (ok) {
    console.log('Todos são maior que 3')
} else {
    console.log('Nenhum item é maior do que 3')
}

document.getElementsByClassName('lista')[0].innerHTML = '...'
document.getElementsByTagName('button') 

function verde () {
    limpar ()
    document.querySelector('#exemplo').classList.add('verde');
}
vermelho = () => {
    limpar ()
    document.querySelector('#exemplo').classList.add("vermelho");
}
azul = () => {
    limpar ()
    document.querySelector('#exemplo').classList.add('azul');
}
function limpar () {
    document.querySelector('#exemplo').classList.remove("vermelho");
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('azul');
} 
 
document.querySelector('.exemplo').offsetWidth
document.querySelector('.exemplo').offsetHeight
document.querySelector('.exemplo').clientHeight
document.querySelector('.exemplo').clientWidth
document.querySelector('.exemplo').scrollHeight
document.querySelector('.exemplo').scrollWidth

 
function show () {
    if (window.scrollY > 20) {
        document.querySelector('.area_button').setAttribute('style', 'display:flex')
    } else {
        document.querySelector('.area_button').setAttribute('style', 'display:none')
    }
}
window.addEventListener('scroll', show)
function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
show();

let btn = document.querySelector('.btn');
function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
btn.addEventListener('click', subirTela);
  
let lista = [45, 4, 9, 16, 25];
let lista2 = [];

for (i in lista) {
    (lista[i]*2);
    lista2.push(lista[i]);
}
lista2.sort((a, b) => a - b);
a = lista2
console.log(a); 
  
let lista = [5, 10, 15, 20, 30];
let lista2 = [];

lista2 = lista.map(function(item) {
    return (item > 5) ? true : false
})
let res = lista2
console.log(res) 
let lista = [5, 10, 15, 20, 30];
let lista2 = [];

lista2 = lista.filter(function (item) {
    return (item > 5) ? true : false
})

let res = lista2
console.log(res) 

let lista = [
    { marca: 'Fiat', modelo: 'Toro', ano: '2017' },
    { marca: 'Fiat', modelo: 'Uno', ano: '2015' },
    { marca: 'Chevrolet', modelo: 'Corsa', ano: '2015' },
    { marca: 'Volkswagen', modelo: 'Gol', ano: '2021' }
];
let carros = lista.filter(function (item) {
    return (item.marca === 'Chevrolet') ? true : false;
})
let res = carros;
console.log(res); 
'Alguns Exercícios de word' 
function tabuadas (n) {
    for (let i = 1; i <= 10; i++) {
        let calc = n + " * " + i + " = " + n * i; 
        console.log(calc);
    }
}
for (let i = 1; i <= 10; i++) {
    tabuadas(i);
    console.log("")
}
 RELOGIO
function horas () {
    let clock = document.querySelector('.clock');
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let mili = d.getMilliseconds();
    let zero = '0';
    h = (h < 10 ) ? zero+h : h;
    m = (h < 10 ) ? zero+h : m;
    s = (h < 10 ) ? zero+h : s;
    
clock.innerHTML=`${h}:${m}:${s}`
}
setInterval(horas, 900)
  
let btn = document.querySelector('.btn');
function changeColor() {
    document.getElementsByTagName('body')[0].style.backgroundColor = Color()
    function Color() {
        let color = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        return color;
    }
}
btn.addEventListener('click', changeColor) 
const btn = document.querySelector('.btn');
let pessoas = ['Bonieky', 'Marcus', 'Pedro', 'João', 'Igor'];

function sortNumber() {
    let number = Math.floor(Math.random() * 100);
    let pg = pessoas.length;
    let ps = Math.floor(Math.random()*pg)
    document.getElementsByTagName('h2')[0].innerHTML = 
    `Número do sorteio: ${number}`

    if (number < 20) {
        console.log('Bonieky é o ganhador!')
    } else if (number <= 40 && number > 20) {
        console.log('Marcus é o ganhador!')
    } else if (number <= 60 && number > 40) {
        console.log('Pedro é o ganhador!')
    } else if (number <= 80 && number > 60) {
        console.log('João é o ganhador!')
    } else if (number <= 100 && number > 80) {
        console.log('Igor é o ganhador!')
    }
    
}

btn.addEventListener("click", sortNumber) 
  
let timer
function start () {
    timer = setInterval(showTime, 100)
}
function stop () {
    clearInterval(timer)
}
function showTime () {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ms = d.getMilliseconds();
    let zero = "0";
    h = (h < 10) ? zero+h : h;
    m = (m < 10 ) ? zero+m : m;
    s = (s < 10 ) ? zero+s : s;
    ms = (ms < 10 ) ? zero+ms : ms;
    let time = `${h}:${m}:${s}:${ms}`;
    let show = document.getElementsByTagName('h2')[0].innerHTML = time
}
let btn = document.querySelector('.btn')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
btn.addEventListener('click', showTime)
btn1.addEventListener('click', start)
btn2.addEventListener('click', stop)
  
let timer;
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
function rodar() {
    timer = setTimeout(function () {
        btn1.innerHTML = 'rodou!'
    }, 2000);
}
btn1.addEventListener('click', rodar)

function parar () {
    clearTimeout(timer);
}
btn2.addEventListener('click', parar) 
function conta (a, b) {
    return a * b
}
console.log(conta(2, 4))
let pessoas = {
    nome: 'Marcus',
    sobrenome: 'Evandro',
    idade: 18,
    social: {
        facebook: 'b7web',
        instagram: {
            url: 'https//marcus.com.br',
            seguidores: 1000
        }
    },
};
let {nome, sobrenome, social:{instagram: {url: instagram, seguidores}}} = pessoas;

NomeCompleto = ({social:{instagram: {url:instagram}}}) => {
    return `Siga em: ${instagram} ${nome}`
} 
console.log(NomeCompleto(pessoas)) 
  
let info = ['Marcus Evandro', '', 'Boni', '@marcusegboni'];
let [a,,, d] = info;
console.log(a, d)
let [nome, sobrenome] = ['marcus', 'boni'];
console.log(nome, sobrenome);

function criar() {
    return [1,2,3]
}
let [a,b,c] = criar();
console.log(a, b, c); 
  
soma = (x, y) => x+y
console.log(soma(10, 2))
letrasNome = nome => nome.length;
console.log(letrasNome('Marcus'))

let n = [30, 45, 38, 69, 486, 987];
let res = n.filter(a => a%2 === 0)  // NESTE CASO, ELE EXIBE OS NÚMEROS INTEIROS DE RESTO 0
console.log(res)
  
let numeros = [1,2,3,4];
let outros = [...numeros, 5,6,7,8]
console.log(outros)
function addItem (obj) {
    let lista = {
        ...obj,
        nome: 'Marcus',
        sobrenome: 'Boni',
        idade: 18
    }
    return lista
}
console.log(addItem({rede: '@marcusegboni', celular: 'Xiaomi'}))

function add (nome, ...novosNomes) {
    let lista = [
        ...nomes,
        ...novosNomes
    ]
    return lista
}
let nomes = ['Marcus', 'Bonieky'];
let outros = add(nomes, 'João', 'Lucas', 'suma')
console.log(outros)

let cartao = '1234123412341234';
let cut = cartao.slice(-4);
let show = cut.padStart(12, '*')
console.log(show)

let lista = '{"nome": "Marcus", "idade": 90}'
let json = JSON.parse(lista);
console.log(json.idade) 

let lista = {
    nome: "Marcus",
    idade: 90,
    sobrenome: 'Boni'
}
let json = JSON.stringify(lista)
console.log(json) 

let lista = 'sim';
localStorage.setItem()

let usuarios = ["Bonieky", "Marcus", "João"];

function insertUser (name, callback) {
    setTimeout (() => {
        usuarios.push(name);
        callback()
    }, 1000);
}
function showList () {
    console.log(usuarios)
}

insertUser('Pedro', showList)

const aPromise = new Promise((resolve, reject) => {
    const number = 40;
    resolve(number)
})
aPromise
    .then( value => value)
    .then( (value) => {
        console.log(value)
    })

function getTemperature () {
return new Promise((resolve, reject) => {
    console.log('Pegando a temperatura desejada...');

    setTimeout(() => {
        let error = false;
        if (error =! false) {
            resolve('35°C na sombra da árvore');
        } else {
            reject('Infelizmente deu erro!')
        }
    }, 1000);
});
}

let temp = getTemperature();
temp
.then( value => {
console.log(value)
})
.catch( value => {
    console.log(value)
}); 

  async function loadPosts() {
    document.querySelector('.div').innerHTML = 'Carregando...';
    let req = await fetch("https://jsonplaceholder.typicode.com/users");
    let json = await req.json();
    mountJson(json)
    //mesmas coisas â-  ->
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (result) {
            return result.json();
        })
        .then(function (json) {
            mountJson(json);
        })
        .catch(function (error) {
            console.log('Error!'+ error.message);
        });
}

function mountJson (lista) {
    let html = '';
    for (i in lista) {
        html += '<h3>' + lista[i] + '</h3>';
        html += lista[i].body+'<br/>';
        html += '<hr/>';
    }
    document.querySelector('.div').innerHTML = html
}

async function loadPosts () {
    document.querySelector('.div').innerHTML = 'Carregando...';
    let req = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            title: 'título de teste',
            body: 'Corpo de testes',
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json'
        }});
    let json = await req.json();

    console.log(json)
}
document.querySelector('.btn').addEventListener('click', loadPosts)

async function send () {
    let file = document.querySelector('.input').files[0];

    let body = new FormData();
    body.append('title', 'bla bla bla');
    body.append('file', file);

    let req = await fetch('https://www.bosta.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}


let btn = document.querySelector('.btn');
btn.addEventListener('click', send)

function show () {
    let image = document.querySelector('.input').files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(image);
    img.width = 200;
    img.height = 140;

    document.querySelector('.area').appendChild(img);
}
let btn = document.querySelector('.btn');
btn.addEventListener('click', show)

function newStudent (nome, idade) {
    return {nome, idade}
}
let alunos = [
    newStudent("Mario", 23),
    newStudent("Bonieky", 29),
    newStudent('Marcus', 39),
    newStudent('João', 43)
];

const alunosNovos = alunos.filter( (aluno) => {
   return aluno.idade < 30
});
console.log(alunosNovos)
 
const numbers = [1, 2, 3];
const reduceNumbers = numbers.reduce( (accumulator, item) => accumulator + item)
console.log(reduceNumbers)

const cart = [
    { name: 'Dark souls'},
    { name: 'Mario'},
    { name: 'Resident Evil'},
    { name: 'Silent Hill'}
]

const productList = cart.reduce((accumulator, {name}) => `${accumulator} -${name} \n`, '')

console.log(productList) 

const range = (a, b, s = 1) => {
    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s) 

    const total = [];
    for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step) {
        total.push(i)
    }
    return total
}

console.log(range(5));
//
console.log(range(6, 11));
//
console.log(range(10, 19, 2));
//
console.log(range(6, 2));
//
console.log(range(8, -3, 4));

//Descobrir se um número é impar ou par.
function nowRest(n1, n2) {
    let total = [];
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    let calc = n1 % n2;
    if (calc === 0) {
        console.log(' The number is even!')
        total.push(calc);
    } else {
        console.log(' The number is odd!')
        total.push(calc);
    }
    return `o resto é: ${total}`
};

console.log(nowRest('200', '9'))

 let idade = 21;
let paisPresentes = true;
let comprouBilhete = false;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log(`A pessoa pode viajar? ${podeViajar}`);
if (!comprouBilhete) {
    console.log('não comprou!')
} else {
    console.log('Comprou!')
}

let n1 = 6;
let n2 = 1;
let media = (n1 + n2)/2
console.log(media) 

 function verify (name) {
    let n = name || 'por favor insira seu name';
    let a = name && `Sr. ${name}`
    console.log(n)
    console.log(a)
}

verify('marcus') 

 ITERAÇÃO ARRAYS
const nomes = ['joao', 'bonieky', 'lucas', 'marcus'];

for (let i = 0; i < nomes.length; i++) {
    console.log(`${i}: Nome é ${nomes[i]}`)
} 

 ITERAÇÃO OBJETOS 
const personagem = {
    nome: 'Marcus',
    idade: 18,
    instagram: '@marcusegboni'
}

for (let i in personagem) {
    console.log(i)
    console.log(personagem[i])
} 

 const produto = {
    nome: 'caneta',
    qtd: 10,
    comprar (n) {
        if (n > this.qtd) {
            return 'Quantidade desejada não disponível!'
        }
        this.qtd -= n
    },
    teste1: function () {
        console.log(this);
    },
    teste2: () => {
        console.log(this)
    }
}
produto.comprar(3);
console.log(produto.teste1());
console.log(produto.teste2()); 
    ITERAÇÃO ARRAYS DE OBEJETOS
const pessoas = [{
   nome: 'marcus',
   idade: 29
},
{
   nome: 'joao',
   idade: 21
},
{
   nome: 'pedro',
   idade: 14
},
{
   nome: 'lucas',
   idade: 39
}
]
function showPeople () {
   for(i = 0; i < pessoas.length; i++) {
       console.log(`Nome do individuo: ${pessoas[i].nome} e idade: ${pessoas[i].idade}`)
   }
}
showPeople() 

    REFERENCIA VS VALOR
function show (a) {
   a.push('sim')
}

let arr = ['nao']
console.log(arr)
show(arr)
console.log(arr)

function prop (b) {
   b += (' adicionado')
   console.log(b)
}
let n = 10;
prop(n)
console.log(n) 

 function generateNumber (max) {
    return parseInt(Math.random() * max)
};

let arr = [];
while (arr.length <= 20) {
    let randomNumber = generateNumber(30);
    console.log(randomNumber);
    if (arr.indexOf(randomNumber) < 0) {
        arr.push(randomNumber)
    }
}
console.log(arr) 
     TABUADA
const output = document.querySelector('.output');
        const btn = document.querySelector('.btn')
        const btnClear = document.querySelector('.btn.clean')

        function mostrarTabuada() {
            let n = parseFloat( prompt('Digite um número:') );
            let msg = "";
            for (let i = 0; i <= 1000; i++) {
                msg += `${n} x ${i} = ${(n * i)} <br>`;
            }
            output.innerHTML = msg;
        }

        function limparTabuada () {
            output.innerHTML = '';
        }

        btn.addEventListener('click', mostrarTabuada);
        btnClear.addEventListener('click', limparTabuada); 

 function somar () {
    console.log(arguments)
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

console.log(somar(1, 2, 3, 2, 91, 213)) 

 function calcularMedia () {

    let total = 0;
    let qtd = arguments.length;
    for (i = 0; i < qtd; i++) {
        if (typeof arguments[i] !== 'number') {
            throw Error('only numbers')
        }
        total += arguments[i]
    }
    return total / qtd || 0
}
let resultado = calcularMedia(10, 5);
console.log(resultado) 

 CALCULO DE IMC
 function calcImc(peso, altura) {
    const calc = peso / (altura * altura);
    let total = 0;

    for (i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw Error('only numbers');
        }
    };

    function classification(total) {
        if (total < 16.9) {
            return 'Muito abaixo do peso!';
        } else if (total < 18.4) {
            return 'Abaixo do peso!';
        } else if (total < 24.9) {
            return 'Peso normal!';
        } else if (total < 29.9) {
            return 'Acima  do peso!';
        } else if (total < 34.9) {
            return 'Obesidade Grau I';
        } else if (total <= 40) {
            return 'Obesidade Grau II';
        } else {
            return 'Obesidade Grau III';
        }
    };
    console.log(classification(calc));

    if (calc > 16 && calc < 50) {
        total += calc
        return total.toFixed(1)
    } else if (arguments.length < 2) {
        return 'Por favor insira corretamente os valores!'
    } else {
        return 'Por favor insira a altura em metros e o peso em Kg!'
    };
};

let resultado = calcImc(90, 1.80);
console.log(resultado);
 
 
const teste = function (cb) {
    console.log('funçao teste');
    console.log(cb);
    typeof cb === 'function' && cb(30);
}

const fn = function (param) {
    console.log('funçao passada como parametro');
    console.log(param);
}

teste(fn) 
 
function calcImc(peso, altura, fn) {
    if (peso === undefined || altura === undefined) {
        throw Error('por favor insira os valores corretamente');
    };
    const calc = peso / (altura * altura);
    typeof fn === 'function' && console.log(fn(calc.toFixed(1)));
    return calc.toFixed(1);
};
const classification = function (total) {
    if (total < 16.9) {
        return 'Muito abaixo do peso!';
    } else if (total < 18.4) {
        return 'Abaixo do peso!';
    } else if (total < 24.9) {
        return 'Peso normal!';
    } else if (total < 29.9) {
        return 'Acima  do peso!';
    } else if (total < 34.9) {
        return 'Obesidade Grau I';
    } else if (total <= 40) {
        return 'Obesidade Grau II';
    } else {
        return 'Obesidade Grau III';
    }
};
let resultado = calcImc(80, 1.95, classification);
console.log(resultado); 

 
const arr_like = {0: 'I', 1: 'am', 2: 'Array-like', length: 3};
let sim = Array.isArray(arr_like);
console.log(sim) 

 EXERCÍCIO 01
const average = (...num) => {
    averageOfNumbers = num.reduce( (accumulator, number) => accumulator + number, 0);
    return averageOfNumbers / num.length
}
console.log(average(25,75)); 

 EXERCÍCIO 02
const maintenance = num => {
    if (num === 0) {
        return ''
    }
    if (num === 1) {
        return 'chunk';
    } else {
        return 'chunks-' + maintenance(num - 1)
    }
}
console.log(maintenance(6)) 

 EXERCÍCIO 03
const reverse = (value) => {
    const newArray = [];

    for (let i = 0; i <  value.length; i++) {
        newArray[i] = value[value.length - 1 - i]
    } 
    return newArray
}
console.log(reverse([1, 2, 3, 4, 5, 6])); 

 EXERCÍCIO 04
function square(num) {
    let numbers = num.toString().split('')
    const squareArray = numbers.map( el => Number(el) ** 2).join('')

    return squareArray
     let result = '';
    for (i = 0; i < numbers.length; i++) {
        result += Math.pow(Number(numbers[i]), 2).toString();
    }
    return Number(result) 
}
console.log(square(3514)) 

 
function vefication(word) {
    let letters = word.toLowerCase().split('').sort()
    return letters[letters.length - 1]
}
console.log(vefication('Hello World')); 
 EXERCÍCIO 06
function invertWord(word) {
    return word.split('').reverse().join('')
}

function reverseWord(str) {
    return str.toLowerCase().split(' ').map(invertWord).join(' ')
}
console.log(reverseWord('lorem inpsum dolore'));  

(function () {
  const upButton = document.querySelector('[data-btn="up"]');
  const downButton = document.querySelector('[data-btn="down"]');
  const rightButton = document.querySelector('[data-btn="right"]');
  const leftButton = document.querySelector('[data-btn="left"]');
  const positionButton = document.querySelector("[data-btn='position']");
  const element = document.querySelector(".filho");

  function movePosition(name) {
    let position = 0;
    let counterDown = 0;
    let counterUp = 0;
    let counterRight = 0;
    let counterLeft = 0;
    return {
      name,
      forDown() {
        counterUp += 30;
        position += counterDown;
        element.style.top = `${counterUp}px`;
      },
      forUp() {
        counterUp -= 30;
        position += counterDown;
        element.style.top = `${counterUp}px`;
      },
      forRight() {
        counterRight += 30;
        position += counterRight;
        element.style.left = `${counterRight}px`;
      },
      forLeft() {
        counterRight -= 30;
        position += counterRight;
        element.style.left = `${counterRight}px`;
      },
      getPosition() {
        const message = document.querySelector(".message");
        message.innerHTML = `
          <p> Posição atual: ${position}px </p>
        `;
        message.classList.toggle("show");

        setTimeout(() => {
          message.classList.toggle("show");
        }, 1500);
      },
    };
  }

  const rex = movePosition("Rex");

  upButton.addEventListener("click", rex.forUp);
  downButton.addEventListener("click", rex.forDown);
  rightButton.addEventListener("click", rex.forRight);
  leftButton.addEventListener("click", rex.forLeft);
  positionButton.addEventListener("click", rex.getPosition);
})();
