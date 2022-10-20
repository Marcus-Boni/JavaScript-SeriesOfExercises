/*function calcularImovel(metragem, quartos) {
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
*/

/*function calcularImovel(metragem, quartos) {
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
}*/

/*function calcularImovel(metragem, quartos) {
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
*/


/* function validar(usuario, senha) {
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
 } */

/*function validar(usuario, senha) {
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
 }*/

//function square(x) {
 //   return x * x
//}

/*
function squares (a, b) {
    square = (x) => (x * x);
    return square(a) + square(b);
}
console.log(squares(2, 2));*/

/*let lista = ['marcus', 89, true];
console.log(lista[2]);*/
/*
let lista = [
    'sal',
    'açúcar',
    'ovo',
    'fermento'
];
lista.push('peidei');
console.log(lista);
console.log(`Total de ingredientes compostos neste bolo: ${lista.length}`); */
/*
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
console.log(carros.length);*/
/*
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
*/
/*
let pessoa = {
    nome: 'Marcus',
    sobrenome: 'Boni',
    idade: 18,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomeCompleto()); */
/*
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
*/
/*
document.getElementById("peidei").innerHTML = "fósforo";
document.write('Peidei')
window.alert('Opa, eu estou funcionando meu amigo!')
*/
/*
function digitou(ak) {
    if (ak.keyCode == 13) {
        let text = document.getElementById("campo").value;
        console.log(text)
    }
}*/
/*
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
}*/
/*
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
}*/
/*
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

carros.acelerar();*/
/*
function toggle () {
   let menu = document.getElementById('menu_area');
    if (menu.style.width === '200px' ) {
        return menu.style.width = '0px';
    } else {
        return menu.style.width = '200px';
    }
}*/
/*
function toggle() {
    let menuArea = document.getElementById('menu_area');

    if (menuArea.classList.contains('menu_oppened') == true) {
        menuArea.classList.remove('menu_oppened');
    } else {
        menuArea.classList.add('menu_oppened');
    }
} *//*
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
document.getElementById("dia").innerHTML = "Hoje é "+ diaNome;*/
/*
let carros = ['Ferrari', 'Toro', 'Palio', 'Corolla'];
let html = '<ul>';

for (let i in carros) {
    html += '<li>'+ carros[i] + '</li>';
}

html += '</ul>';

document.querySelector('#dia').innerHTML = html; */
/*
let fruits = ['Maça', 'Uva', 'Banana'];
for (i of fruits) {
    console.log(`Aqui está uma fruta: ${[i]}`)
}

let number = 1;
while (number <= 100 ) {
    console.log(`${number}`)
    number++
}*/
/*
let fruits = ['Banana', 'Maça', 'Uva', 'Pera'];

fruits.pop();
fruits.push('u');
fruits[fruits.length - 1] = 'ksgou';
console.log(fruits);*/
/*
let numbers = [9, 2, 3, 4, 6];
numbers.sort();
numbers.reverse()
console.log(numbers);*/

/*
let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrrari', year: 2020}
]
cars.sort((a, b) => { //a neste caso é o fiat e 'b' é o BMW.
    return b.year - a.year //ele analisa um por um
})
cars.sort()

console.log(cars);*/
/*/
let fruits = ['Banana', 'Maça', 'Uva', 'Pêra'];
let ok = fruits.every((item) => {
    return item.length > 3;
})
if (ok) {
    console.log('Todos são maior que 3')
} else {
    console.log('Nenhum item é maior do que 3')
}*/
/*
document.getElementsByClassName('lista')[0].innerHTML = '...'
document.getElementsByTagName('button') */
/*
let btn =  document.querySelector('button');

function trocar () {
    if (btn.classList.contains('verde')) {
        btn.classList.remove('verde');
        btn.classList.add('vermelho');
    } else {
        btn.classList.remove('vermelho');
        btn.classList.add('verde');
}
}

function somar (x, y) {
    return `peidei na cara de ${x} e ${y}`
}
console.log(somar(2, 3)); */
/*
function trocarImagem(f, animalName) {
    document.querySelector('.image').setAttribute('src', 'assets/image/' + f);
    document.querySelector('.image').setAttribute('data-animal', animalName)
    document.querySelector('.image').setAttribute('id', 'peidei')
} 
function NomeAnimal () {
    let animal = document.querySelector('.image').getAttribute('data-animal');
    alert(animal)
} */

function calcAge() {
    let img = document.querySelector('.image');
    let audio = document.querySelector('audio');
    let spanAge = document.querySelector('h2');

let year = document.querySelector('#inp_number').value
var data = new Date();
var calc = data.getFullYear() - year;
    if (calc === 0 ) {
        img.setAttribute('src', 'assets/image/meme.jpg')
        spanAge.innerText = calc + ' anos'; 
    }
    if (calc <= 10 && calc > 0) {
        img.setAttribute('src', 'assets/image/010.png');
        audio.setAttribute('src', 'assets/audios/audio1.mp3');
        spanAge.innerText = calc + ' anos'; 
    } else if (calc <= 20 && calc >= 10) {
        img.setAttribute('src', 'assets/image/10-20.png');
        audio.setAttribute('src', 'assets/audios/audio2.mp3');
        spanAge.innerText = calc + ' anos'; 
    } else if (calc <= 30 && calc >= 20) {
        img.setAttribute('src', 'assets/image/20-30.png');
        audio.setAttribute('src', 'assets/audios/audio3.mp3');
        spanAge.innerText = calc + ' anos'; 
    }
    else if (calc <= 40 && calc >= 30) {
        img.setAttribute('src', 'assets/image/30-40.png');
        audio.setAttribute('src', 'assets/audios/audio4.mp3');
        spanAge.innerText = calc + ' anos'; 
    }
    else if (calc <= 50 && calc >= 40) {
        img.setAttribute('src', 'assets/image/40-50.png');
        audio.setAttribute('src', 'assets/audios/audio5.mp3');
        spanAge.innerText = calc + ' anos'; 
    }
    else if (calc >= 50) {
        img.setAttribute('src', 'assets/image/60-70.png');
        audio.setAttribute('src', 'assets/audios/audio6.mp3');
        spanAge.innerText = calc + ' anos'; 
    } 
}

