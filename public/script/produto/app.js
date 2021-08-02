function mountHTML(produto) {
  const rows = produto.map(UserTableRow.render).join("");
  const tBody = document.querySelector("tbody");
  tBody.innerHTML = rows;
  document.querySelector("div.conteudo2").style.display = "none";
}

function hideRowsNotMatched(term) {
  document.querySelectorAll("tbody tr").forEach((row) => {
    const { codigoBarras, nome, descricao, marca } = JSON.parse(
      row.dataset.user
    );
    const str = [codigoBarras, nome, descricao, marca].join("\n");
    if (str.toLowerCase().includes(term.toLowerCase())) {
      document.querySelector("div.conteudo2").style.display = "none";
      row.classList.remove("hide");
      return;
    }
    document.querySelector("div.conteudo2").style.display = "";
    row.classList.add("hide");
  });
}

function bindEvents() {
  const filter = document.getElementById("term");
  filter.addEventListener("keyup", (event) => {
    const term = event.currentTarget.value;
    hideRowsNotMatched(term);
  });
}

async function renderScreen() {
  const users = await UsersService.getAll();
  mountHTML(users);
  bindEvents();
}

async function initialize() {
  await renderScreen();
}

window.onload = function () {
  document.querySelector("div.conteudo2").style.display = "none";
  initialize();
};
