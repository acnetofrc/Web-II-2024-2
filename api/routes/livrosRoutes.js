const express = require('express');

const router = express.Router();

const controllerLivros = require("../controllers/livrosControllers");

// router.post("/listar", function (req, res ) {
//     console.log("Encontrei a rota!!")
//     res.send("Encontrei a rota!")
// });

router.get("/",controllerLivros.getAll);
router.get("/:id",controllerLivros.getById);
router.post("/",controllerLivros.create);
router.put("/:id",controllerLivros.update);
router.delete("/:id",controllerLivros.remove);

router.post('/listar', controllerLivros.livrosListar);


module.exports = router

