const express = require("express");
const router = express.Router();

const IndexHome = require("./controller");
router.get("/", IndexHome.index);
router.get("/produto/:id", IndexHome.categorias);
router.get("/orcamento/:codigo", IndexHome.produtoID);
router.get("/anunciantes/:codigo", IndexHome.anuncianteID);
router.post("/meuorcamento", IndexHome.meusorcamento);
router.post("/meusorcamentocadastrado", IndexHome.meusorcamentocadastrado);
module.exports = router;
