const { Pessoas } = require("../models")

class PessoaController {

    static async listarPessoas(req, res) {

        try {
            const pessoas = await Pessoas.findAll()
            return res.status(200).send(pessoas)
        } catch (error) {
            return res.status(500).send({ "message": error.message })
        }
    }

    static async buscarPeloID(req, res) {
        try {
            const { id } = req.params;
            const pessoa = await Pessoas.findOne({ where: { id: id } })
            return res.status(200).send(pessoa)
        } catch (error) {
            return res.status(500).send({ "message": error.message })
        }
    }

    static async apagar(req, res) {
        try {
            const { id } = req.params;
            await Pessoas.destroy({ where: { id: id } })
            return res.status(200).send({ "message": "Registro apagado com sucesso" })
        } catch (error) {
            return res.status(500).send({ "message": error.message })
        }
    }

    static async atualizar(req, res) {
        const { id } = req.params;
        const updatePessoa = req.body;
        try {
            const query = { where: { id: id } }
            await Pessoas.update(updatePessoa, query)
            const pessoa = Pessoas.findOne(query)
            return res.status(201).send(pessoa)
        } catch (error) {
            return res.status(500).send({ "message": error.message })
        }
    }

    static async criar(req, res) {
        const novaPessoa = req.body;
        try {
            const pessoa = await Pessoas.create(novaPessoa)
            return res.status(201).send(pessoa)
        } catch (error) {
            return res.status(500).send({ "message": error.message })
        }
    }
}

module.exports = PessoaController