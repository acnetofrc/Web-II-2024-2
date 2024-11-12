const loginModels = require("../models/loginModels.js")

module.exports = {
    login,
    validarPSW,
    livrosListar
}
 
function login(req, res) {
    console.log("Carregando Página de Login")
    res.render('login.ejs', {
        title: "Login",
        mensagem: "Senha do Usuário"
    })
}

function validarPSW(req, res) {
    console.log("\nController Validar Login....\n")
    // return res.json({dados: req.body})
    const m_usuario = req.body.login;
    const m_senha = req.body.senha;
    console.log("Usuário: " + m_usuario)
    console.log("Senha..: " + m_senha)

    loginModels.validarPSW(m_usuario, m_senha, function(erro, result){
        if(erro) {
            throw erro
        }
        if(result[0].usu_apelido == m_usuario && result[0].usu_password == m_senha) {
            console.log("Dados Válidos!")
            res.render("index.ejs", {
                title:"Menu PI"
            });
        } else {
            console.log("Dados Inválidos!")
            res.render("login.ejs", {
                title:"Login",
                mensagem: "Dados Inválidos"
            })
        }
    })
}

function livrosListar(req, res) {
    console.log('Controller Livros');
    livrosController.listarLivros(function(err, result){
      console.log('Listar Livros');
      if(err){
        throw err;
      }else{
        res.render('frm_livrosListar.ejs', {
          title: 'Livros',
          empresa: 'Fatec Franca - Programação Script - WEB',
          rota: req.originalUrl,
          obj_livros: result
        });      
      }
    }
  )
}
  
