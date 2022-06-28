const database = require("../models")

class NiveisControllers {

    static async listarNiveis(_, res) {
        try {
            const niveis = await database.Niveis.findAll()
            return res.status(200).json(niveis)
        } catch (error) {
            return res.status(500).json({ "message": error.message })
        }
    }
}

module.exports = NiveisControllers