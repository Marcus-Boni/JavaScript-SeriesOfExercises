const defaultCharacter = {
  name: "",
  life: 1,
  maxLife: 1,
  attack: 0,
  defense: 0,
};

const createKnight = (name) => {
  return {
    ...defaultCharacter,
    name: name,
    life: 100,
    maxLife: 100,
    attack: 10,
    defense: 8,
  };
};

const createSorcerer = (name) => {
  return {
    ...defaultCharacter,
    name: name,
    life: 80,
    maxLife: 80,
    attack: 15,
    defense: 3,
  };
};

const createLittleMonster = () => {
  return {
    ...defaultCharacter,
    name: "LittleMonster",
    life: 40,
    maxLife: 40,
    attack: 6,
    defense: 4,
  };
};

const createBigMonster = () => {
  return {
    ...defaultCharacter,
    name: "BigMonster",
    life: 120,
    maxLife: 120,
    attack: 12,
    defense: 6,
  };
};

const stage = {
  fighter1: null,
  fighter2: null,
  fighter1El: null,
  fighter2El: null,

  start(fighter1, fighter2, fighter1El, fighter2El) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;

    this.fighter1El
      .querySelector(".attackbutton")
      .addEventListener("click", () =>
        this.doAttack(this.fighter1, this.fighter2)
      );
    this.fighter2El
      .querySelector(".attackbutton")
      .addEventListener("click", () =>
        this.doAttack(this.fighter2, this.fighter1)
      );

    this.update();
  },
  update() {
    let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
    this.fighter1El.querySelector(".lifebar .bar").style.width = `${f1Pct}%`;
    this.fighter1El.querySelector(".name").innerHTML = `${
      this.fighter1.name
    } - ${this.fighter1.life.toFixed(2)}HP`;

    let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    this.fighter2El.querySelector(".name").innerHTML = `${
      this.fighter2.name
    } - ${this.fighter2.life.toFixed(2)}HP`;
    this.fighter2El.querySelector(".lifebar .bar").style.width = `${f2Pct}%`;
  },
  doAttack(attacking, attacked) {
    if (attacking.life <= 0) {
      log.addMessage("Você que está tentando atacar está morto!");
      return;
    }
    if (attacked.life <= 0) {
      log.addMessage("Você está atacando algo que já está morto!");
      return;
    }

    const attackFactor = (Math.random() * 2).toFixed(2);
    const defenseFactor = (Math.random() * 2).toFixed(2);

    const actualAttack = attacking.attack * attackFactor;
    const actualDefense = attacked.defense * defenseFactor;

    if (actualAttack > actualDefense) {
      attacked.life -= actualAttack;
      attacked.life = attacked.life < 0 ? 0 : attacked.life;
      log.addMessage(
        `${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${
          attacked.name
        }!`
      );
    } else {
      log.addMessage(
        `Ataque não foi suficiente para superar a defesa de ${attacked.name}`
      );
    }

    this.update();
  },
};

const log = {
  list: [],
  addMessage(msg) {
    this.list.push(msg);
    this.render();
  },
  render() {
    const logEl = document.querySelector(".log");
    logEl.innerHTML = "";

    this.list.forEach((item) => {
      logEl.innerHTML += `<li>${item}</li>`;
    });
  },
};
