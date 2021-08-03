const express = require("express");
const router = express.Router();
const IndexHome = require("./controller");
const IndexLogin = require("../login/controller");
router.get("/", IndexHome.index);
router.get("/login", IndexLogin.login);
router.get("/cadastro", IndexLogin.cadastro);
router.post("/cadastro", IndexLogin.cadastroUsuario);
router.post("/login", IndexLogin.respostaAutenticacao);
router.get("/orcamento/:todoId", IndexHome.indexorcamento);
router.get("/categorias/:id", IndexHome.categorias);
router.post("/meusorcamento", IndexHome.meusorcamentos);
router.get("/meusorcamento/:codigo",IndexHome.remover_o_produto_meusorcamentos);
router.get("/meusorcamento", IndexHome.Getmeusorcamentos);
router.get("/quem_somos", IndexHome.quem_somos);
router.get("/faq", IndexHome.faq);
router.get("/fale_conosco", IndexHome.fale_conosco);
module.exports = router;
