const { Router } = require("express")
const TurmasController = require("../controllers/TurmasController")

const router = Router()

router.get("/turmas", TurmasController.listarTurmas)

module.exports = router