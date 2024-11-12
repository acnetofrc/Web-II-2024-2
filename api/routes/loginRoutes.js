const express = require('express');

const router = express.Router();

const controllerLogin = require("../controllers/loginControllers");

//rota raiz do projeto
router.get('/', controllerLogin.login);
router.post('/validar', controllerLogin.validarPSW);

module.exports = router

