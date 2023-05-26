const gameBoard = document.querySelector(".game__board");
const cards = [...document.querySelectorAll(".card")];
const restarButton = document.querySelector(".restart");
let erros = 0;
let lockBoard = false;
let firstCard = null;
let secondCard = null;

const verifyCards = () => {
  if (firstCard && secondCard) {
    if (firstCard.dataset.nome === secondCard.dataset.nome) {
      firstCard = null;
      secondCard = null;
    } else {
      lockBoard = true;
      erros++;
      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        firstCard.style.backgroundColor = "#E8AA42";
        secondCard.style.backgroundColor = "#E8AA42";
        firstCard = null;
        secondCard = null;
        lockBoard = false;
      }, 1000);
    }
  }
};

const flipCard = (e) => {
  if (lockBoard) return false;

  e.currentTarget.classList.remove("flip");
  e.currentTarget.classList.add("flip");

  const name = e.currentTarget.dataset.nome;

  deck.forEach((animal) => {
    if (name == animal.name) {
      e.currentTarget.style.backgroundColor = animal.color;
      console.log("deu");
    }
  });

  if (!firstCard) {
    firstCard = e.target;

    return false;
  }

  secondCard = e.target;

  verifyCards();

  document.querySelector(".circle").innerHTML = erros;
};

cards.forEach((card) => card.addEventListener("click", flipCard));

(function () {
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * cards.length);
    card.style.order = randomPosition;
  });
})();

restarButton.addEventListener("click", () => {
  cards.forEach((card) => {
    card.classList.remove("flip");
    card.style.backgroundColor = "#E8AA42";
  });
  erros = 0;
  document.querySelector(".circle").innerHTML = erros;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
});
