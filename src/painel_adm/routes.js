const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.painel_adm);
router.get("/:todoId", controller.listID);
router.post("/", controller.edit);
router.post("/:todoId", controller.remove);
module.exports = router;
