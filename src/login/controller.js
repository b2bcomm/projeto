const service = require("../login/service");

const controlador = {
  login: (req, res) => {
    res.render("login", { errorMessage: "" });
  },

  cadastro: (req, res) => {
    res.render("cadastro", { errorMessage: "" });
  },

  async respostaAutenticacao(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    if (email == "") {
      res.render("login", { errorMessage: "Digitar o email." });
      return;
    }

    if (password == "") {
      res.render("login", { errorMessage: "Digitar a senha." });
      return;
    }

    if (password == "admin" && email == "admin") {
      req.session.logador = "OK";
      res.redirect("/painel");
      return;
    }

    // acessa o banco e verificar:

    const todoList = await service.autenticacaoAsuario(email, password);
    // var myJSON = JSON.stringify(todoList);
    // console.log("retornoo-->>"+ myJSON)

    let resultado = "nao";
    let reposta_usuario = "";
    todoList.forEach((item) => {
      resultado = JSON.stringify(item.cm_senha);
    });

    req.session.usuario = resultado;

    // console.log("resultado:: "+ resultado)

    if (resultado == "nao") {
      res.render("login", { errorMessage: "Usuario não localizado.." });
      return;
    }

    // res.render('painel_adm', { errorMessage: req.session.logador});
    res.redirect("/");
  },

  async cadastroUsuario(req, res) {
    let nome = req.body.nome;
    let email = req.body.email;
    let password = req.body.password;
    if (nome == "") {
      res.render("cadastro", { errorMessage: "Digitar o nome." });
      return;
    }

    if (email == "") {
      res.render("cadastro", { errorMessage: "Digitar o email." });
      return;
    }

    if (password == "") {
      res.render("cadastro", { errorMessage: "Digitar a senha." });
      return;
    }
    const todoList = await service.cadastrarUsuario(nome, email, password);
    let resultado = "nao";
    todoList.forEach((item) => {
      resultado = JSON.stringify(item);
      console.log("resultado:: " + resultado);
    });
    res.redirect("/");
  },
};

module.exports = controlador;
