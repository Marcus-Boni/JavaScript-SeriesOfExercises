const url = "https://jsonplaceholder.typicode.com/posts";
const postArea = document.querySelector(".posts");
const button = document.querySelector("#insertButton");
const title = document.querySelector("#titleField");
const body = document.querySelector("#bodyField");

const addPostIntoDOM = (json) => {
  json.forEach((post, i) => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const hr = document.createElement("hr");

    h1.innerHTML = post.title;
    div.innerHTML = post.body;
    div.prepend(h1);

    div.appendChild(hr);
    postArea.appendChild(div);
  });
};

const renderPosts = async () => {
  postArea.innerHTML = "Carregando...";

  let response = await fetch(url);
  let json = await response.json();

  if (json.length <= 0) {
    postArea.innerHTML = "Nenhum post encontrado";
    return;
  }

  addPostIntoDOM(json);
};

const addPosts = async (_title, _body) => {
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      _title,
      _body,
      userId: 2,
    }),
  });

  title.value = "";
  body.value = "";

  renderPosts();
};

button.addEventListener("click", () => {
  let titleValue = title.value;
  let bodyValue = body.value;

  if (titleValue == "" || bodyValue == "") {
    alert("Preencha todos os campos");
    return;
  }

  addPosts(titleValue, bodyValue);
});
window.addEventListener("DOMContentLoaded", () => {
  renderPosts();
});
