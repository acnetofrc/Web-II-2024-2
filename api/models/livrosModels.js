const conexao = require("../config/conexao.js");

console.log("Acessando Models dos Livros...")

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}

function getAll(callback){
    conexao.query("select * from livros ", callback)
}

function getById(codigo, callback) {
    conexao.query("Select * From livros Where liv_codigo = " + codigo, callback)
}

function create (dados, callback) {
    var msql = "INSERT INTO livros SET ? "
    conexao.query(msql, dados, callback)

}

function update (dados, codigo, callback) {
    var msql = `UPDATE livros SET ? WHERE liv_codigo = ${codigo}`
    
    console.log(msql)
    conexao.query(msql, dados, (erro, callback) => {
        if(erro){
            throw erro
        } else {
            console.log("Registro " + codigo + " Atualizado!")
        }
    })

}

function remove(codigo, callback) {
    conexao.query("DELETE FROM livros WHERE liv_codigo = " + codigo, callback)
}

