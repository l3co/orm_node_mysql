const database = require("../models")

import database from "../models"

class MatriculasController {

    static async listarMatriculas(_, res) {
        try {
            const matriculas = database.Matriculas.findAll()
            return res.status(200).json(matriculas)
        } catch (error) {
            return res.status(500).json({ "message": error.message })
        }
    }
}

module.exports = MatriculasController