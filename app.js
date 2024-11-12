const express = require('express');
//const path = require('path');
const app = express();

const livrosRoutes = require("./api/routes/livrosRoutes.js");
const aluno = require("./api/routes/alunosRoutes");
const loginRoutes = require('./api/routes/loginRoutes');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//app.set('views', path.join(__dirname,'./api/views'))
app.set('view engine', 'ejs');
app.set('views', './api/views');

// configurar diretório estático
app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(express.static('estilos'));
app.use(express.static('imagens'));
app.use(express.static('js'));
 
const port = 3000;

app.use("/", loginRoutes);
app.use("/livros", livrosRoutes);
app.use('/aluno', aluno);


//servidor rodando
app.listen(port, () => {
    console.log(`Aplicativo Rodando na Porta ${port}`);
})

//var conexao = require('../../config/conexao.js');

//const conexao = require("./api/config/conexao.js");

module.exports = app;
 
