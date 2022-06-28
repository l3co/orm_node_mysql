const { Router } = require("express")
const MatriculasController = require("../controllers/MatriculasController")

const router = Router()

router.get("/matriculas", MatriculasController.listarMatriculas)

module.exports = router