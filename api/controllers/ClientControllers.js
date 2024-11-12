const Cliente = require('../models/ClienteModel');


module.exports = {

    async index(req, res) {
        const Clients = await Cliente.findAll();

        return res.json(Clients);
    },

    async create(req, res) {
        const client = await Cliente.create(req.body);
        return res.json(client);
    },
    async update(req, res) {

        const client = await Cliente.update(req.body, 
        {
            where: {id: req.params.id},
        }
        );
        return res.json(client);
    }    

    
}
