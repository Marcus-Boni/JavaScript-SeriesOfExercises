const char = createKnight("Marcus");
const monster = createBigMonster();

stage.start(
  char,
  monster,
  document.querySelector("#char"),
  document.querySelector("#monster")
);
