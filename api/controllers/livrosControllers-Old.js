const Livros = require('../models/livrosModels.js');

console.log("Acessando Controllers de Livros...")

module.exports = {

    async index(req, res) {
        const Clients = await Cliente.findAll();

        return res.json(Clients);
    },


    async getAll(req, res) {
//        console.log("Acessando Todos os Livros.....")
        const olivros = await Livros.getAll();
//console.log("Livros Recuperados: ",olivros)
        return res.json(olivros);
    }

    // async create(req, res) {
    //     const olivro = await livros.create(req.body);
    //     return res.json(olivros);
    // },
    // async update(req, res) {

    //     const olivro = await livros.update(req.body, 
    //     {
    //         where: {id: req.params.id},
    //     }
    //     );
    //     return res.json(olivros);
    // }    

    
}
