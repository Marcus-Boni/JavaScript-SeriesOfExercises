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
  let cep = cepInput.value;
  cep = cep.replace("-", "");
  if (cep.length === 8) {
    try {
      const dados = await fetch(getCepUrl(cep), {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .catch((err) => console.log(err));

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
  } else {
    patioInput.value = "";
    neighborhoodInput.value = "";
    cityInput.value = "";
    stateInput.value = "";
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

const cepInput = document.querySelector("#inputCEP");
const patioInput = document.querySelector("#inputLogradouro");
const neighborhoodInput = document.querySelector("#inputBairro");
const cityInput = document.querySelector("#inputCidade");
const stateInput = document.querySelector("#inputEstado");
const wrongCep = document.querySelector("#bs-feedback");
const wrongCepMessage = wrongCep.querySelector(".content");
const closeButton = wrongCep.querySelector(".close");

const getCepUrl = (cep) => `https://viacep.com.br/ws/${cep}/json/`;

const getCepPromises = (cep) => {
  const data = fetch(getCepUrl(cep), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
  return data;
};

const renderInputs = ({ logradouro, bairro, localidade, uf }) => {
  patioInput.value = logradouro;
  neighborhoodInput.value = bairro;
  cityInput.value = localidade;
  stateInput.value = uf;
};

const displayError = () => {
  patioInput.value = "";
  neighborhoodInput.value = "";
  cityInput.value = "";
  stateInput.value = "";
  wrongCepMessage.innerText = "Cep inexistente!";
  wrongCep.style.transform = "translateY(0)";
};

const verifyInput = async (e) => {
  let cep = e.currentTarget.value;
  cep = cep.replace("-", "");

  if (isNaN(cep) || cep.length !== 8) return;
  

  try {
    const dados = await getCepPromises(cep);
    if (dados.erro) {
      displayError();
    } else {
      renderInputs(dados);
    }
  } catch (err) {
    console.log(err);
  }
};

const hideError = () => {
  wrongCep.removeAttribute("style");
};

cepInput.addEventListener("input", verifyInput);
closeButton.addEventListener("click", hideError);
