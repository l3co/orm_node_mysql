const { Pessoas } = require("../models")

class PessoaController {

    static async listarPessoas(req, res) {

        try {
            const pessoas = await Pessoas.findAll()
            console.log(pessoas);
            return res.status(200).send(pessoas)
        } catch (error) {
            return res.status(500).send({ "message": error.message })
        }
    }
}

module.exports = PessoaController