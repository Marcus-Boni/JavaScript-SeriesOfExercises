const log = new Log(document.querySelector(".log"));
const knightChar = new Knight("Marcus");
const sorcererChar = new Sorcerer("Marcus");

const charElement = document.querySelector("#char");
const monsterElement = document.querySelector("#monster");
const knight = document.querySelector(".knight");
const sorcerer = document.querySelector(".sorcerer");
const knightAttributes = document.querySelector(".kngattributes");
const sorcererAttributes = document.querySelector(".srcattributes");
const fightArea = document.querySelector(".fightarea");
const initialScreen = document.querySelector(".initialscreen");
const returnButton = document.querySelector(".return");
function renderKnightAttributes(warriorAttributes) {
  const warriorDescription = document.querySelector("#kng");

  warriorDescription.innerHTML = `
  <h2>Attributes List</h2>
  <h4>Health points: ${warriorAttributes.life}</h4>
  <h4>Max life: ${warriorAttributes.maxLife}</h4>
  <h4>Attack damage: ${warriorAttributes.attack}</h4>
  <h4>Defense: ${warriorAttributes.defense}</h4>
  <br />
  <p>
    A knight is a person granted an honorary title of knighthood by a
    head of state (including the Pope) or representative for service
    to the monarch, the church or the country, especially in a
    military capacity.
  </p>`;

  warriorDescription.classList.toggle("appear");
}

function renderSorcererAttributes(warriorAttributes) {
  const warriorDescription = document.querySelector("#src");

  warriorDescription.innerHTML = `
  <h2>Attributes List</h2>
  <h4>Health points: ${warriorAttributes.life}</h4>
  <h4>Max life: ${warriorAttributes.maxLife}</h4>
  <h4>Attack damage: ${warriorAttributes.attack}</h4>
  <h4>Defense: ${warriorAttributes.defense}</h4>
  <br />
  <p>
    A knight is a person granted an honorary title of knighthood by a
    head of state (including the Pope) or representative for service
    to the monarch, the church or the country, especially in a
    military capacity.
  </p>`;

  warriorDescription.classList.toggle("appear");
}

knightAttributes.addEventListener("click", () =>
  renderKnightAttributes(knightChar)
);
knight.addEventListener("click", (e) => {
  const monster = new BigMonster();
  const stage = new Stage(
    knightChar,
    monster,
    charElement,
    monsterElement,
    log,
    fightArea,
    initialScreen
  );
  stage.start();
});

sorcererAttributes.addEventListener("click", () => {
  renderSorcererAttributes(sorcererChar);
});
sorcerer.addEventListener("click", (e) => {
  const monster = new BigMonster();
  const stage = new Stage(
    sorcererChar,
    monster,
    charElement,
    monsterElement,
    log,
    fightArea,
    initialScreen
  );
  stage.start();
});
returnButton.addEventListener("click", () => window.location.reload());