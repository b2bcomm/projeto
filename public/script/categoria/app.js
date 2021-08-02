let users = [];

function mountHTML(produto) {
  const rows = produto.map(UserTableRow.render).join("");
  const tBody = document.querySelector("tbody");
  tBody.innerHTML = rows;
}

function hideRowsNotMatched(term) {
  document.querySelectorAll("tbody tr").forEach((row) => {
    const { codigoBarras, nome, descricao, marca } = JSON.parse(
      row.dataset.user
    );
    const str = [codigoBarras, nome, descricao, marca].join("\n");
    if (str.toLowerCase().includes(term.toLowerCase())) {
      row.classList.remove("hide");
      return;
    }
    row.classList.add("hide");
  });
}

function bindEvents() {
  const btn = document.querySelector("a#utilidade.texto_dos_menu_do_footer.botao_classificador");
  btn.addEventListener("click", async (event) => {
    document.querySelector("div#nome_categoria").innerHTML = "Categoria: Utilidades Domesticas";
    document.querySelector("div#modal").style.display = "inline";
    document.querySelector("div#modal_tabela").style.display = "none";
    users = await UsersService.getID("U");
    mountHTML(users);
    document.querySelector("div#modal").style.display = "none";
    document.querySelector("div#modal_tabela").style.display = "inline";
  });

  const btnG = document.querySelector("a#G.texto_dos_menu_do_footer.botao_classificador");
  btnG.addEventListener("click", async (event) => {
    document.querySelector("div#nome_categoria").innerHTML ="Categoria: Cuidados Pessoais";
    document.querySelector("div#modal").style.display = "inline";
    document.querySelector("div#modal_tabela").style.display = "none";
    users = await UsersService.getID("G");
    mountHTML(users);
    document.querySelector("div#modal").style.display = "none";
    document.querySelector("div#modal_tabela").style.display = "inline";
  });

  const btnE = document.querySelector("a#E.texto_dos_menu_do_footer.botao_classificador");
  btnE.addEventListener("click", async (event) => {
    document.querySelector("div#nome_categoria").innerHTML ="Categoria: Eletroeletronicos";
    document.querySelector("div#modal").style.display = "inline";
    document.querySelector("div#modal_tabela").style.display = "none";
    users = await UsersService.getID("E");
    mountHTML(users);
    document.querySelector("div#modal").style.display = "none";
    document.querySelector("div#modal_tabela").style.display = "inline";
  });

  const btnI = document.querySelector("a#I.texto_dos_menu_do_footer.botao_classificador");
  btnI.addEventListener("click", async (event) => {
    document.querySelector("div#nome_categoria").innerHTML =
      "Categoria: Informatica";
    document.querySelector("div#modal").style.display = "inline";
    document.querySelector("div#modal_tabela").style.display = "none";
    users = await UsersService.getID("I");
    mountHTML(users);
    document.querySelector("div#modal").style.display = "none";
    document.querySelector("div#modal_tabela").style.display = "inline";
  });

  const btnB = document.querySelector("a#B.texto_dos_menu_do_footer.botao_classificador");
  btnB.addEventListener("click", async (event) => {
    document.querySelector("div#nome_categoria").innerHTML = "Categoria: Kids";
    document.querySelector("div#modal").style.display = "inline";
    document.querySelector("div#modal_tabela").style.display = "none";
    users = await UsersService.getID("B");
    mountHTML(users);
    document.querySelector("div#modal").style.display = "none";
    document.querySelector("div#modal_tabela").style.display = "inline";
  });

  const btnC = document.querySelector(
    "a#C.texto_dos_menu_do_footer.botao_classificador"
  );

  btnC.addEventListener("click", async (event) => {
    document.querySelector("div#nome_categoria").innerHTML ="Categoria: Puericultura";
    document.querySelector("div#modal").style.display = "inline";
    document.querySelector("div#modal_tabela").style.display = "none";
    users = await UsersService.getID("C");
    mountHTML(users);
    document.querySelector("div#modal").style.display = "none";
    document.querySelector("div#modal_tabela").style.display = "inline";
  });

  const btnS = document.querySelector("a#S.texto_dos_menu_do_footer.botao_classificador");
  btnS.addEventListener("click", async (event) => {
    document.querySelector("div#nome_categoria").innerHTML ="Categoria: Papelaria e Escritorio";
    document.querySelector("div#modal").style.display = "inline";
    document.querySelector("div#modal_tabela").style.display = "none";
    users = await UsersService.getID("S");
    mountHTML(users);
    document.querySelector("div#modal").style.display = "none";
    document.querySelector("div#modal_tabela").style.display = "inline";
  });

  const btnH = document.querySelector("a#H.texto_dos_menu_do_footer.botao_classificador");
  btnH.addEventListener("click", async (event) => {
    document.querySelector("div#nome_categoria").innerHTML ="Categoria: Hobby-Art";
    document.querySelector("div#modal").style.display = "inline";
    document.querySelector("div#modal_tabela").style.display = "none";
    users = await UsersService.getID("H");
    mountHTML(users);
    document.querySelector("div#modal").style.display = "none";
    document.querySelector("div#modal_tabela").style.display = "inline";
  });

  const btnA = document.querySelector("a#A.texto_dos_menu_do_footer.botao_classificador");
  btnA.addEventListener("click", async (event) => {
    document.querySelector("div#nome_categoria").innerHTML ="Categoria: Coffee Break e Descartaveis";
    document.querySelector("div#modal").style.display = "inline";
    document.querySelector("div#modal_tabela").style.display = "none";
    users = await UsersService.getID("A");
    mountHTML(users);
    document.querySelector("div#modal").style.display = "none";
    document.querySelector("div#modal_tabela").style.display = "inline";
  });

  const btnF = document.querySelector("a#F.texto_dos_menu_do_footer.botao_classificador");
  btnF.addEventListener("click", async (event) => {
    document.querySelector("div#nome_categoria").innerHTML ="Categoria: Festas";
    document.querySelector("div#modal").style.display = "inline";
    document.querySelector("div#modal_tabela").style.display = "none";
    users = await UsersService.getID("F");
    mountHTML(users);
    document.querySelector("div#modal").style.display = "none";
    document.querySelector("div#modal_tabela").style.display = "inline";
  });

  const btntupd = document.querySelector("a#T.texto_dos_menu_do_footer.botao_classificador");
  btntupd.addEventListener("click", async (event) => {
    document.querySelector("div#nome_categoria").innerHTML ="Todas as Categorias";
    document.querySelector("div#modal").style.display = "inline";
    document.querySelector("div#modal_tabela").style.display = "none";
    users = await UsersService.getAll();
    mountHTML(users);
    document.querySelector("div#modal").style.display = "none";
    document.querySelector("div#modal_tabela").style.display = "inline";
  });

  const filter = document.getElementById("term");
  filter.addEventListener("keyup", (event) => {
    const term = event.currentTarget.value;
    console.log("chegouu:: " + term);
    hideRowsNotMatched(term);
  });
}

async function renderScreen(IDFILTRO) {
  if (IDFILTRO == "T") {
    users = await UsersService.getAll();
    mountHTML(users);
  } else {
    users = await UsersService.getID(IDFILTRO);
    mountHTML(users);
  }
  document.querySelector("div#modal").style.display = "none";
  document.querySelector("div#modal_tabela").style.display = "inline";
  bindEvents();
}

async function initialize() {
  const IDFILTRO = document.querySelector("div#ID_FILTRO").innerHTML;
  await renderScreen(IDFILTRO.trim());
}

window.onload = function () {
  document.querySelector("div#modal_tabela").style.display = "none";
  document.querySelector("div#modal").style.display = "inline";
  initialize();
};
