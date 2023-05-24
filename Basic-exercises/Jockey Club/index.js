const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

const fazerAposta = (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const peso = Number(frm.inPeso.value);

  if (verApostaExiste(peso)) {
    alert("Aposta já existe!");
    frm.inPeso.focus();
    return;
  }

  if (localStorage.getItem("melanciaNome")) {
    const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
    const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;
    localStorage.setItem("melanciaNome", melanciaNome);
    localStorage.setItem("melanciaPeso", melanciaPeso);
  } else {
    localStorage.setItem("melanciaNome", nome);
    localStorage.setItem("melanciaPeso", peso);
  }

  mostrarApostas();
  frm.reset();
  frm.inNome.focus();
};

const verApostaExiste = (peso) => {
  if (localStorage.getItem("melanciaPeso")) {
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    return pesos.includes(peso.toString());
  } else {
    return false;
  }
};

const mostrarApostas = () => {
  if (!localStorage.getItem("melanciaNome")) {
    respLista.innerText = "";
    return;
  }

  const nomes = localStorage.getItem("melanciaNome").split(";");
  const pesos = localStorage.getItem("melanciaPeso").split(";");

  let lista = "";

  for (let i = 0; i < nomes.length; i++) {
    lista += `${nomes[i]} - ${pesos[i]}gr\n`;
  }

  respLista.innerText = lista;
};

const mostrarVencedor = () => {
  if (!localStorage.getItem("melanciaNome")) {
    alert("não há apostas cadastradas!");
    return;
  }

  const pesoCorreto = Number(prompt("Digite o peso correto da melancia:"));

  if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
    return;
  }

  const nomes = localStorage.getItem("melanciaNome").split(";");
  const pesos = localStorage.getItem("melanciaPeso").split(";");

  let vencedorNome = nomes[0];
  let vencedorPeso = Number(pesos[0]);

  for (let i = 1; i < nomes.length; i++) {
    const difVencedor = Math.abs(vencedorPeso - pesoCorreto);
    const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

    if (difAposta < difVencedor) {
      vencedorNome = nomes[i];
      vencedorPeso = pesos[i];
      continue;
    }
  }

  let mensagem = `Resultado - Peso Correto: ${pesoCorreto}gr`;
  mensagem += "\n" + "-".repeat(20);
  mensagem += `\nVencedor: ${vencedorNome}`;
  mensagem += `\nAposta: ${vencedorPeso}gr`;
  alert(mensagem);
};

const limparApostas = () => {
  if (confirm("Deseja realmente limpar os dados?")) {
    localStorage.clear();
    mostrarApostas();
  }
};

window.addEventListener("load", mostrarApostas);
frm.addEventListener("submit", fazerAposta);
frm.btVencedor.addEventListener("click", mostrarVencedor);
frm.btLimpar.addEventListener("click", limparApostas);


 const respVisitas = document.querySelector(".container-fluid h5");
const imgClube = document.querySelector("#imgClube");
const inputs = document.querySelectorAll("input[type=radio]");
const dvTitulo = document.querySelector("#divTitulo");

const contarVisitas = () => {
  let contador = 0;

  if (localStorage.getItem("visitas")) {
    contador = Number(localStorage.getItem("visitas"));
  }

  contador++;

  if (contador === 1) {
    respVisitas.innerText = `Muito bem vindo! Essa é a sua primeria visita!`;
  } else {
    respVisitas.innerText = `Você já visitou essa página ${contador} vezes!`;
  }

  localStorage.setItem("visitas", contador);
};

const trocarClube = () => {
  const clubes = ["Brasil", "Pelotas", "Farroupilha"];

  let selecao = "";

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      selecao = i;
      break;
    }
  }

  if (selecao <= 2) {
    dvTitulo.className = `row cores-${clubes[selecao]}`;
    imgClube.src = `img/${clubes[selecao].toLowerCase()}.png`;
    imgClube.className = "img-fluid";
    imgClube.alt = `Símbolo do ${clubes[selecao]}`;
    localStorage.setItem("clube", clubes[selecao]);
  } else {
    dvTitulo.className = "row";
    imgClube.className = "d-none";
    imgClube.alt = "";
    localStorage.removeItem("clube");
  }
};

const verificarClube = () => {
  if (localStorage.getItem("clube")) {
    const clube = localStorage.getItem("clube");
    const selectRadio = document.querySelector(`#rb${clube}`);
    selectRadio.checked = true;

    trocarClube();
  }
};

for (const input of inputs) {
  input.addEventListener("change", trocarClube);
}

window.addEventListener("load", contarVisitas);
window.addEventListener("load", verificarClube);


 const frm = document.querySelector(".col-sm-8 form");
const resp = frm.querySelector("pre");
const arrProdutos = [];

const listarProdutos = (e) => {
  e.preventDefault();

  const produto = frm.inProduto.value;

  arrProdutos.push(produto);
  arrProdutos.sort();

  resp.innerText = `Produtos Adicionados\n${"-".repeat(20)}\n${arrProdutos.join(
    "\n"
  )}`;
  localStorage.setItem("compraProdutos", arrProdutos);
  frm.inProduto.focus();
  frm.reset();
};

const verificarProdutos = () => {
  if (localStorage.getItem("compraProdutos")) {
    const produtos = localStorage.getItem("compraProdutos");

    resp.innerText = `Produtos Adicionados\n${"-".repeat(20)}\n${produtos
      .split(",")
      .join("\n")}`;
  }
};

frm.addEventListener("submit", listarProdutos);
window.addEventListener("load", verificarProdutos);
frm.btLimpar.addEventListener("click", () => {
  if (confirm("Você realmente deseja apagar sua lista de compras?")) {
    localStorage.removeItem("compraProdutos");
    resp.innerText = "";
  }
  frm.inProduto.focus();
});


 
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const verificarDados = (e) => {
  e.preventDefault();

  const produto = frm.inProduto.value;

  if (localStorage.getItem("comprasProdutos")) {
    const produtos = localStorage.getItem("comprasProdutos").split(";");

    produtos.push(produto);

    produtos.sort();

    localStorage.setItem("comprasProdutos", produtos.join(";"));
  } else {
    localStorage.setItem("comprasProdutos", produto);
  }

  listarProdutos();

  frm.reset();
  frm.inProduto.focus();
};

const listarProdutos = () => {
  if (!localStorage.getItem("comprasProdutos")) {
    resp.innerText = "";
    return;
  }

  const produtos = localStorage.getItem("comprasProdutos").split(";");

  resp.innerText = `Produtos Adicionados\n${"-".repeat(20)}\n${produtos.join(
    "\n"
  )}`;
};

const limparLista = () => {
  if (confirm("Deseja realmente limpar a lista?")) {
    localStorage.removeItem("comprasProdutos");
    listarProdutos();
  } else {
    frm.inProduto.focus();
    alert("a lista está vazia!");
  }
};

frm.addEventListener("submit", verificarDados);
frm.btLimpar.addEventListener("click", limparLista);
window.addEventListener("load", listarProdutos);


 const frm = document.querySelector("form");
const resp = document.querySelector("h4");
const pendentServices = frm.querySelector("h3 span");
let contador = 0;

const adicionarServicos = (e) => {
  e.preventDefault();

  const servico = frm.inServico.value;

  if (localStorage.getItem("servicos")) {
    const servicos = localStorage.getItem("servicos").split(";");

    servicos.push(servico);

    localStorage.setItem("servicos", servicos.join(";"));
  } else {
    localStorage.setItem("servicos", servico);
  }

  mostrarPendentes();
  frm.reset();
  frm.inServico.focus();
};

const mostrarPendentes = () => {
  if (localStorage.getItem("servicos")) {
    contador = localStorage.getItem("servicos").split(";").length;
  } else {
    contador = 0;
  }
  pendentServices.innerText = contador;
};

const executarServico = () => {
  if (!localStorage.getItem("servicos")) {
    alert("Não há serviços pendentes!");
    return;
  }

  const servicos = localStorage.getItem("servicos").split(";");

  const servico = servicos.shift();

  resp.innerText = `Serviço executado: ${servico}`;

  localStorage.setItem("servicos", servicos.join(";"));

  mostrarPendentes();
};

frm.addEventListener("submit", adicionarServicos);
frm.btExecutar.addEventListener("click", executarServico);
window.addEventListener("load", mostrarPendentes);

 const frm = document.querySelector("form");
const divQuadro = document.querySelector("#divQuadro");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const tarefa = frm.inTarefa.value;

  const h5Element = document.createElement("h5");
  const texto = document.createTextNode(tarefa);
  h5Element.appendChild(texto);
  divQuadro.appendChild(h5Element);

  frm.inTarefa.value = "";
  frm.inTarefa.focus();
});

frm.btSelecionar.addEventListener("click", () => {
  const tarefas = divQuadro.querySelectorAll("h5");

  if (tarefas.length === 0) {
    alert("Não há tarefas cadastradas!");
    return;
  }

  let aux = -1;

  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].className === "tarefa-selecionada") {
      tarefas[i].className = "tarefa-normal";
      aux = i;
      break;
    }
  }

  if (aux == tarefas.length - 1) {
    aux = -1;
  }

  tarefas[aux + 1].className = "tarefa-selecionada";
});

frm.btRetirar.addEventListener("click", () => {
  const tarefas = divQuadro.querySelectorAll("h5");

  let aux = -1;

  tarefas.forEach((tarefa, i) => {
    if (tarefa.className == "tarefa-selecionada") {
      aux = i;
    }
  });

  if (aux === -1) {
    alert("Selecione uma tarefa para remover!");
    return;
  }

  if (
    confirm(`Deseja realmente excluir a tarefa "${tarefas[aux].innerText}"?`)
  ) {
    divQuadro.removeChild(tarefas[aux]);
  }
});

frm.btGravar.addEventListener("click", () => {
  const tarefas = divQuadro.querySelectorAll("h5");

  if (tarefas.length === 0) {
    alert("Não há tarefas cadastradas!");
    return;
  }

  let dados = "";

  tarefas.forEach((tarefa) => {
    dados += tarefa.innerText + ";";
  });

  localStorage.setItem("tarefasDia", dados.slice(0, -1));

  if (localStorage.getItem("tarefasDia")) {
    alert("Os dados foram gravados com sucesso!");
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("tarefasDia")) {
    const dados = localStorage.getItem("tarefasDia").split(";");

    dados.forEach((dado) => {
      const h5Element = document.createElement("h5");
      const texto = document.createTextNode(dado);
      h5Element.appendChild(texto);
      divQuadro.appendChild(h5Element);
    });
  }
});

 const frm = document.querySelector("form");
const divMoedas = document.querySelector("#divMoedas");

window.addEventListener("load", () => {
  const num1_00 = Math.ceil(Math.random() * 5);
  const num0_50 = Math.ceil(Math.random() * 5);
  const num0_25 = Math.ceil(Math.random() * 5);
  const num0_10 = Math.ceil(Math.random() * 5);

  // define texto alternativo das imagens (acessibilidade)
  const alt1_00 = "Moedas de um real";
  const alt0_50 = "Moedas de Cinquenta Centavos";
  const alt0_25 = "Moedas de Vinte e Cinco Centavos";
  const alt0_10 = "Moedas de Dez Centavos";

  // chama o método criarMoedas passando os argumentos
  criarMoedas(num1_00, "1_00.jpg", alt1_00, "moeda1-00");
  criarMoedas(num0_50, "0_50.jpg", alt0_50, "moeda0-50");
  criarMoedas(num0_25, "0_25.jpg", alt0_25, "moeda0-25");
  criarMoedas(num0_10, "0_10.jpg", alt0_10, "moeda0-10");
});

const criarMoedas = (num, moeda, textoAlt, classe) => {
  for (let i = 1; i <= num; i++) {
    const novaMoeda = document.createElement("img");
    novaMoeda.src = `img/${moeda}`;
    novaMoeda.alt = textoAlt;
    novaMoeda.className = classe;
    divMoedas.appendChild(novaMoeda);
  }

  const br = document.createElement("br");
  divMoedas.appendChild(br);
};

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const soma = Number(frm.inSoma.value);
  const moedas = divMoedas.querySelectorAll("img");
  let totalMoedas = 0;

  moedas.forEach((moeda) => {
    const value = Number(moeda.src.slice(-8, -4).replace("_", "."));
    totalMoedas += value;
  });

  const div = document.createElement("div");
  const h3 = document.createElement("h3");

  let mensagem = "";

  if (soma == totalMoedas.toFixed(2)) {
    div.className = "alert alert-success";
    mensagem = `Parabéns! Você acertou!`;
    document.querySelector(".btn").disabled = true;
  } else {
    div.className = "alert alert-danger";
    mensagem = `Que pena! Você errou!`;
  }

  const texto = document.createTextNode(mensagem);
  h3.appendChild(texto);
  div.appendChild(h3);
  divMoedas.appendChild(div);

  frm.inSoma.focus();
});

frm.addEventListener("reset", () => {
  window.location.reload();
});


 const frm = document.querySelector("form");
const tbFilmes = document.querySelector("table");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = frm.inTitulo.value;
  const genero = frm.inGenero.value;

  inserirLinha(titulo, genero);
  gravarFilme(titulo, genero);

  frm.reset();
  frm.inTitulo.focus();
});

const inserirLinha = (titulo, genero) => {
  const linha = tbFilmes.insertRow(-1);

  const col1 = linha.insertCell(0);
  const col2 = linha.insertCell(1);
  const col3 = linha.insertCell(2);

  col1.innerText = titulo;
  col2.innerText = genero;
  col3.innerHTML = `<i class="exclui" title="Excluir">&#10008</i>`;
};

const gravarFilme = (titulo, genero) => {
  if (localStorage.getItem("filmesTitulo")) {
    const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
    const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;

    localStorage.setItem("filmesTitulo", filmesTitulo);
    localStorage.setItem("filmesGenero", filmesGenero);
  } else {
    localStorage.setItem("filmesTitulo", titulo);
    localStorage.setItem("filmesGenero", genero);
  }
};

window.addEventListener("load", () => {
  if (localStorage.getItem("filmesTitulo")) {
    const titulos = localStorage.getItem("filmesTitulo").split(";");
    const generos = localStorage.getItem("filmesGenero").split(";");

    for (let i = 0; i < titulos.length; i++) {
      inserirLinha(titulos[i], generos[i]);
    }
  }
});

tbFilmes.addEventListener("click", (e) => {
  if (e.target.classList.contains("exclui")) {
    const titulo = e.target.parentElement.parentElement.children[0].innerText;

    if (confirm(`Deseja realmente excluir o filme "${titulo}"?`)) {
      e.target.parentElement.parentElement.remove();

      localStorage.removeItem("filmesTitulo");
      localStorage.removeItem("filmesGenero");

      for (let i = 0; i < tbFilmes.rows.length; i++) {
        const titulo = tbFilmes.rows[i].cells[0].innerText;
        const genero = tbFilmes.rows[i].cells[1].innerText;

        gravarFilme(titulo, genero);
      }
    }
  }
});

 const frm = document.querySelector("form");
const divIdade = document.querySelector("#divIdade");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const idade = Number(frm.inIdade.value);

  if (idade <= 0 || idade > 120 || isNaN(idade)) {
    alert("Idade inválida!");
    frm.inIdade.focus();
    return;
  }

  const idadeArr = idade.toString().split("");

  for (let i = 0; i < idadeArr.length; i++) {
    const img = document.createElement("img");
    img.src = `img/${idadeArr[i]}.jpg`;
    img.alt = `Idade: ${idadeArr[i]} anos`;
    divIdade.appendChild(img);
  }
  const br = document.createElement("br");
  divIdade.appendChild(br);
  frm.inIdade.value = "";
  frm.inIdade.focus();
});

frm.addEventListener("reset", () => {
  location.reload();
});


 const frm = document.querySelector("form");
const divNome = document.querySelector("#divNome");
frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const arrNomesWithSpace = nome.split("");
  const arrNomesWithoutSpace = nome.split(" ");
  const cores = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "gray",
  ];

  if (!arrNomesWithSpace.includes(" ")) {
    alert("Insira o nome completo por favor!");
    frm.inNome.focus();
    return;
  }

  const h3Exist = document.querySelectorAll("h3");

  h3Exist.forEach((h3) => {
    divNome.removeChild(h3);
  });

  arrNomesWithoutSpace.forEach((nome) => {
    const h3 = document.createElement("h3");
    h3.innerText = nome;
    const randomColor = Math.floor(Math.random() * cores.length);
    h3.style.color = cores[randomColor];
    divNome.appendChild(h3);
    frm.inNome.focus();
    frm.inNome.value = "";
  });
});

 const frm = document.querySelector("form");
const divJogos = document.querySelector("#divJogos");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const clube = frm.inClube.value;

  const newH5 = document.createElement("h5");
  newH5.innerText = clube;
  newH5.className = "text-end me-2";
  newH5.style.fontStyle = "italic";

  divJogos.appendChild(newH5);

  frm.inClube.value = "";
  frm.inClube.focus();
});

frm.btMontar.addEventListener("click", () => {
  const clubes = divJogos.querySelectorAll("h5");

  if (clubes.length % 2 == 1 || clubes.length == 0) {
    alert("Informe um número par de clubes!");
    return;
  }

  const newH3 = document.createElement("h3");
  newH3.innerText = "Tabela de Jogos";
  divJogos.appendChild(newH3);

  const newTable = document.createElement("table");
  newTable.className = "table table-striped";
  divJogos.appendChild(newTable);

  let linha = "";
  clubes.forEach((clube, i) => {
    if (i % 2 == 0) {
      linha = newTable.insertRow(-1);
      const col1 = linha.insertCell(0);
      col1.textContent = clube.innerText;
    } else {
      const col2 = linha.insertCell(1);
      col2.textContent = clube.innerText;
    }
  });

  frm.btMontar.disabled = true;
  divJogos.querySelector('input[type="submit"]').disabled = true;
});

frm.addEventListener("reset", () => {
  window.location.reload();
});

const frm = document.querySelector("form");
const respLista = document.querySelector("pre");
const respCavalo = document.querySelector("#outCavalo");

const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

const apostas = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const cavalo = Number(frm.inCavalo.value);
  const valor = Number(frm.inValor.value);

  apostas.push({ cavalo, valor });
  console.log(apostas);
  let lista = `Apostas Realizadas\n${"-".repeat(20)}\n`;

  for (const aposta of apostas) {
    lista += `Nº ${aposta.cavalo} - ${obterCavalo(aposta.cavalo)}`;
    lista += `- R$: ${aposta.valor.toFixed(2)}\n`;
  }

  respLista.innerText = lista;

  frm.reset();
  frm.inCavalo.focus();
});

frm.inCavalo.addEventListener("blur", () => {
  if (frm.inCavalo.value == "") {
    respCavalo.innerText = "";
    return;
  }

  const numCavalo = Number(frm.inCavalo.value);

  if (!validarCavalo(numCavalo)) {
    alert("Nº de cavalo inválido!");
    frm.inCavalo.focus();
    return;
  }

  const nome = obterCavalo(numCavalo);
  const contaNum = contarApostas(numCavalo);
  const total = totalizarApostas(numCavalo);

  respCavalo.innerText = "";

  respCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$: ${total.toFixed(
    2
  )})`;
});

const obterCavalo = (num) => {
  const posicao = num - 1;
  return CAVALOS[posicao];
};

const validarCavalo = (num) => {
  return num >= 1 && num <= CAVALOS.length;
};

const contarApostas = (num) => {
  let contador = 0;

  for (const aposta of apostas) {
    if (aposta.cavalo == num) {
      contador++;
    }
  }

  return contador;
};

const totalizarApostas = (num) => {
  let total = 0;

  for (const aposta of apostas) {
    if (aposta.cavalo == num) {
      total += aposta.valor;
    }
  }

  return total;
};

frm.inCavalo.addEventListener("focus", () => {
  respCavalo.innerText = "";
  frm.inCavalo.value = "";
});

frm.btResumo.addEventListener("click", () => {
  const somaApostas = [0, 0, 0, 0, 0, 0];

  for (const aposta of apostas) {
    somaApostas[aposta.cavalo - 1] += aposta.valor;
  }

  let resposta = `Nº Cavalo............... R$ Apostado\n${"-".repeat(40)}\n`;
  CAVALOS.forEach((cavalo, i) => {
    resposta += `${i + 1} ${cavalo.padEnd(20)}`;
    resposta += `${somaApostas[i].toFixed(2).padStart(11)}\n`;
  });

  respLista.innerText = resposta;
});

frm.btGanhador.addEventListener("click", () => {
  const ganhador = Number(prompt("Digite o número do cavalo ganhador:"));

  if (isNaN(ganhador) || !validarCavalo(ganhador)) {
    alert("Número de cavalo inválido!");
    return;
  }

  const total = apostas.reduce((acc, { valor }) => acc + valor, 0);

  let resumo = `Resultado Final do Páreo\n${"-".repeat(20)}\n`;

  resumo += `Nº Total de apostas: ${apostas.length}\n`;
  resumo += `Total Geral R$: ${total.toFixed(2)}\n\n`;
  resumo += `Ganhador Nº ${ganhador} - ${obterCavalo(ganhador)}\n\n`;
  resumo += `Nº de Apostas: ${contarApostas(ganhador)}\n`;
  resumo += `Total apostado R$: ${totalizarApostas(ganhador).toFixed(2)}`;
  respLista.innerText = resumo;

  frm.btApostar.disabled = true;
  frm.btResumo.disabled = true;
  frm.btGanhador.disabled = true;
  frm.btNovo.focus();
});

frm.btNovo.addEventListener("load", () => {
  window.location.reload();
});
