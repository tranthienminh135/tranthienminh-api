const express = require("express");
const router = express.Router();
const metaController = require("../controllers/MetaController");

router.use("/", metaController.index);

module.exports = router;
