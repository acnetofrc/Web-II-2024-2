const express = require('express');

const router = express.Router();

const controllerLivros = require("../controllers/livrosControllers");

router.get("/",controllerLivros.getAll);
router.get("/:id",controllerLivros.getById);
router.post("/",controllerLivros.create);
router.put("/:id",controllerLivros.update);
router.delete("/:id",controllerLivros.remove);

module.exports = router
