//Knight or Sorcerer
//LittleMonster or BigMonster

class Character {
  _life = 1;
  maxLife = 1;
  attack = 0;
  defense = 0;

  constructor(name) {
    if (this.constructor === Character) {
      throw new Error("Character is an abstrate Class!");
    }
    this.name = name;
  }

  get life() {
    return this._life;
  }

  set life(newLife) {
    this._life = newLife < 0 ? 0 : newLife;
  }
}

class Knight extends Character {
  constructor(name) {
    super(name);
    this.life = 100;
    this.attack = 8;
    this.defense = 8;
    this.maxLife = this.life;
  }
}

class Sorcerer extends Character {
  constructor(name) {
    super(name);
    this.life = 80;
    this.attack = 15;
    this.defense = 3;
    this.maxLife = this.life;
  }
}

class LittleMonster extends Character {
  constructor() {
    super("Little Monster");
    this.life = 40;
    this.attack = 4;
    this.defense = 6;
    this.maxLife = this.life;
  }
}

class BigMonster extends Character {
  constructor() {
    super("BigMonster");
    this.life = 120;
    this.attack = 16;
    this.defense = 6;
    this.maxLife = this.life;
  }
}

class Stage {
  constructor(
    fighter1,
    fighter2,
    fighter1El,
    fighter2El,
    logObject,
    fightAreaEl,
    initialScreenEl
  ) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;
    this.fightAreaEl = fightAreaEl;
    this.initialScreenEl = initialScreenEl;
    this.log = logObject;
  }

  start() {
    this.update();
    this.initialScreenEl.style.display = "none";
    this.fightAreaEl.style.visibility = "visible";
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
  }

  update() {
    this.fighter1El.querySelector(".name").innerHTML = `${
      this.fighter1.name
    } - ${this.fighter1.life.toFixed(2)}HP`;
    let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
    this.fighter1El.querySelector(".lifebar .bar").style.width = `${f1Pct}%`;

    this.fighter2El.querySelector(".name").innerHTML = `${
      this.fighter2.name
    } - ${this.fighter2.life.toFixed(2)}HP`;
    let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    this.fighter2El.querySelector(".lifebar .bar").style.width = `${f2Pct}%`;

  }

  doAttack(attacking, attacked) {
    if (attacked.life <= 0) {
      this.log.addMessage("Você está atacando algo que já está morto!");
      return;
    }
    if (attacking.life <= 0) {
      this.log.addMessage("Fui de comes e bebes, não consigo atacar!");
      return;
    }
    const attackFactor = (Math.random() * 2).toFixed(2);
    const defenseFactor = (Math.random() * 2).toFixed(2);

    const actualAttack = attackFactor * attacking.attack;
    const actualDefense = defenseFactor * attacking.defense;

    if (actualAttack > actualDefense) {
      attacked.life -= actualAttack;
      this.log.addMessage(
        `${attacking.name} tirou ${actualAttack.toFixed(2)}HP`
      );
    } else {
      this.log.addMessage(
        `Ataque de ${attacking.name} não superou a defesa de ${attacked.name}`
      );
    }

    this.update();
  }
}

class Log {
  list = [];
  constructor(listEl) {
    this.listEl = listEl;
  }

  addMessage(msg) {
    this.list.push(msg);
    this.render();
  }

  render() {
    this.listEl.innerHTML = "";

    this.list.forEach((el) => {
      this.listEl.innerHTML += `<li>${el}</li>`;
    });
  }
}
