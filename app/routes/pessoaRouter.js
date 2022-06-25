const { Router } = require("express")
const PessoaController = require("../controllers/PessoaController")

const router = Router()

router.get("/pessoas", PessoaController.listarPessoas)
router.get("/pessoas/:id", PessoaController.buscarPeloID)
router.delete("/pessoas/:id", PessoaController.apagar)
router.post("/pessoas", PessoaController.criar)
router.put("/pessoas/:id", PessoaController.atualizar)

module.exports = router
