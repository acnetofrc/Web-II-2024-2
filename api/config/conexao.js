var mysql = require('mysql2');
var database = 'livros';

// instanciar objeto de acesso ao banco de dados
var conexao = mysql.createConnection({
    user: 'root',
    password: 'toor',
    host: 'localhost',
    port: 3306
});

conexao.connect((err) => {
    if (err) {
        console.log('Erro ao conectar no mysql...', err)
        return
    }
    conexao.query('USE ' + database);
    console.log('\nConexão estabilizada com sucesso!!!')

})


module.exports = conexao;

