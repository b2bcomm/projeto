const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.list);
router.post("/", controller.create);
router.patch("/:loginId", controller.edit);
router.delete("/:loginId", controller.remove);

module.exports = router;
