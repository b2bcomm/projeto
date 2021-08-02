const service = require("./service");
const controlador = {
  painel_adm: async (req, res) => {
    const ARRY_DADOS = await service.TODO_LIST_BANCO_DE_DADOS_findAll();
    const ARRY_DADOSID = await service.findOne(1);
    if (req.session.logador) {
      res.render("painel_adm", {
        errorMessage: req.session.usuario,
        ARRY_DADOS,
        ARRY_DADOSID,
      });
    } else {
      res.redirect("login");
    }
  },

  async listID(req, res) {
    const { todoId } = req.params;
    const ARRY_DADOSID = await service.findOne(todoId);
    const ARRY_DADOS = await service.TODO_LIST_BANCO_DE_DADOS_findAll();
    let logotipo = "images/logo-branca.png";
    res.render("painel_adm_detalhe", {
      errorMessage: req.session.usuario,
      ARRY_DADOSID,
      ARRY_DADOS,
      logotipo,
    });
  },

  edit: async (req, res) => {
    let tudo = req.body;
    service.AtualizarEmpresa(tudo);
    if (req.session.logador) {
      res.redirect("painel");
    } else {
      res.redirect("login");
    }
  },

  remove: async (req, res) => {
    let { todoId } = req.params;
    res.status(201);
    res.json({ success: true });
  },

  cadadastroProduto: async (req, res) => {
    const ARRY_DADOS = await service.TODO_LIST_BANCO_DE_DADOS_findAll();
    res.render("cadastroProduto", {
      errorMessage: req.session.usuario,
      ARRY_DADOS,
    });
  },
};

module.exports = controlador;
