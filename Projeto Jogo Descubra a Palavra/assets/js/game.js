const frm = document.querySelector("form");
const respPalavra = document.querySelector("#outPalavra");
const respErros = document.querySelector("#outErros");
const respDica = document.querySelector("#outDica");
const respChances = document.querySelector("#outChances");
const respMensagemFinal = document.querySelector("#outMensagemFinal");
const imgStatus = document.querySelector("img");

let palavraSorteada = "";
let dicaSorteada = "";

window.addEventListener("load", () => {
  if (!localStorage.getItem("jogoPalavra")) {
    alert("Cadastre palavras para jogar!");
    frm.inLetra.disabled = true;
    frm.btJogar.disabled = true;
    frm.btVerDica.disabled = true;
  }

  const palavras = localStorage.getItem("jogoPalavra").split(";");
  const dicas = localStorage.getItem("jogoDica").split(";");

  const tam = palavras.length;

  const numAleatorio = Math.floor(Math.random() * tam);

  palavraSorteada = palavras[numAleatorio].toUpperCase();
  dicaSorteada = dicas[numAleatorio];
  let novaPalavra = "";

  for (const letra of palavraSorteada) {
    if (letra == palavraSorteada.charAt(0)) {
      novaPalavra += palavraSorteada.charAt(0);
    } else {
      novaPalavra += "_";
    }
  }

  respPalavra.innerText = novaPalavra;
});

frm.btVerDica.addEventListener("click", () => {
  if (respErros.innerText.includes("*")) {
    alert("Você já solicitou a dica...!");
    frm.inLetra.focus();
    return;
  }

  respDica.innerText = " * " + dicaSorteada;
  respErros.innerText += "*";

  const chances = Number(respChances.innerText) - 1;
  respChances.innerText = chances;

  trocarStatus(chances);

  verificarFim();

  frm.inLetra.focus();
});

const trocarStatus = (chances) => {
  if (chances > 1) imgStatus.src = `assets/img/status${chances}.jpg`;
};

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const letra = frm.inLetra.value.toUpperCase();

  let erros = respErros.innerText;
  let palavra = respPalavra.innerText;

  if (erros.includes(letra) || palavra.includes(letra)) {
    alert("Você já tentou essa letra...!");
    frm.inLetra.focus();
    return;
  }

  if (palavraSorteada.includes(letra)) {
    let novaPalavra = "";

    for (let i = 0; i < palavraSorteada.length; i++) {
      if (palavraSorteada.charAt(i) == letra) {
        novaPalavra += letra;
      } else {
        novaPalavra += palavra.charAt(i);
      }
    }
    respPalavra.innerText = novaPalavra;
  } else {
    respErros.innerText += letra;
    const chances = Number(respChances.innerText) - 1;
    respChances.innerText = chances;

    trocarStatus(chances);
  }

  verificarFim();

  frm.inLetra.value = "";
  frm.inLetra.focus();
});

const verificarFim = () => {
  const chances = Number(respChances.innerText);

  if (chances == 0) {
    respMensagemFinal.className = "display-3 text-danger";
    respMensagemFinal.innerText = `Ah... é ${palavraSorteada}. Você perdeu!`;
    concluirJogo();
  } else if (respPalavra.innerText == palavraSorteada) {
    respMensagemFinal.className = "display-3 text-primary";
    respMensagemFinal.innerText = `Parabéns! Você ganhou!`;
    troocarStatus(4);
    concluirJogo();
  }
};

const concluirJogo = () => {
  respDica.innerText = "* Clique no botão 'Iniciar jogo' para jogar novamente.";
  frm.inLetra.disabled = true;
  frm.btJogar.disabled = true;
  frm.btVerDica.disabled = true;
};
