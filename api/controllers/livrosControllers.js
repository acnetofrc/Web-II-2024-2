const livrosModels = require("../models/livrosModels");

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}

function getAll(req, res) {
    console.log("\nController-Iniciando leitura dos Dados dos Livros na Model...\n")
    var lerLivros
    console.time(lerLivros)
    livrosModels.getAll(function(err,resultado) {
        if(err){
            throw err;
        } else {
            console.log("Busquei Livros na Model...")
            console.log(resultado)
            console.timeEnd(lerLivros)
    
            return res.json(resultado)
        }
    })
};

function getById(req, res){
    var cod = req.params.id;
    livrosModels.getById(cod, function (err, resultado){
//        console.log("Dado: ", resultado[0])
        console.log("Livros Foi Lido...")
        if(err){
            throw err

        }else {
            return res.json(resultado)
        }
    })
}

function create(req, res) {
    var dados = req.body;
    console.log("Adicionando livros...")
    console.log(req.body)
    dados.liv_codigo = 0
 
    livrosModels.create(dados, function(err, resultado){
        if(err){
            throw err;
        } else {
            console.log("\nRegistro Adiciona!")
            res.redirect('/')
        }
    })
}

function update(req, res) {
    console.log("Elterando Registro de Livros....")
    var cod = req.params.id;
    var dados = req.body;
    console.log(req.body)
    console.log("Codigo: " + cod)
    livrosModels.update(dados, cod, function(err,resultado){
        if(err){
            throw err
        } else {
            res.redirect('/')
        }
    })
   
}

function remove(req, res){
    var cod = req.params.id;
    livrosModels.remove(cod, function (err, resultado){
        console.log("Livros Removido...")
        if(err){
            throw err

        }else {
            return res.json(resultado)
        }
    })
}
