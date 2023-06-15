fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((data) => console.log(data.results))
  .catch((error) => console.log(error))
  .finally(() => console.log("finalizou"));

(async function () {
  let pokemons = [];
  try {
    await fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then(({ results }) => {
        const nomes = results.map((item) => item.name);
        pokemons = nomes;
        console.log(pokemons.join("\n").toUpperCase());
      });
    console.log("pokemons");
  } catch (error) {
    console.log(error);
  }
})();

const getCepUrl = (cep) => `https://viacep.com.br/ws/${cep}/json/`;
const cepInput = document.querySelector("#inputCEP");
const patioInput = document.querySelector("#inputLogradouro");
const neighborhoodInput = document.querySelector("#inputBairro");
const cityInput = document.querySelector("#inputCidade");
const stateInput = document.querySelector("#inputEstado");
const wrongCep = document.querySelector("#bs-feedback");
const wrongCepMessage = wrongCep.querySelector(".content");
const closeButton = wrongCep.querySelector(".close");

cepInput.addEventListener("input", async (e) => {
  if (cepInput.value.length === 8) {
    const cep = Number(cepInput.value);
    try {
      const dados = await fetch(getCepUrl(cep), { method: "GET" }).then(
        (response) => response.json().catch((err) => console.log(err))
      );
      console.log(dados);
      if (!dados.erro) {
        patioInput.value = dados.logradouro;
        neighborhoodInput.value = dados.bairro;
        cityInput.value = dados.localidade;
        stateInput.value = dados.uf;
      } else {
        wrongCep.style.transform = "translateY(0)";
        wrongCepMessage.innerText = "Cep inexistente!";
        patioInput.value = "";
        neighborhoodInput.value = "";
        cityInput.value = "";
        stateInput.value = "";
      }
    } catch (err) {
      wrongCep.style.transform = "translateY(0)";
      wrongCepMessage.innerText = err;
    }
  }
});

closeButton.addEventListener("click", () => {
  wrongCep.style.transform = "translateY(-100%)";
});

//cep
//logradouro
//bairro
//localidade
//uf
