const database = require("../models")

class TurmasController {

    static async listarTurmas(_, res) {
        try {
            const turmas = await database.Turmas.findAll()
            return res.status(200).json(turmas)
        } catch (error) {
            return res.status(500).json({ "message": error.message })
        }
    }
}

module.exports = TurmasController