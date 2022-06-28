const { Router } = require("express")
const NiveisController = require("../controllers/NiveisController")

const router = Router()

router.get("/niveis", NiveisController.listarNiveis)

module.exports = router