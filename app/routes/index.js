const express = require("express")
const pessoaRouter = require("./pessoaRouter")
const matriculaRouter = require("./matriculasRouter")
const nivelRouter = require("./niveisRouter")
const turmaRouter = require("./turmasRouter")

module.exports = (app) => {
    app.use(express.json())
    app.use(pessoaRouter)

    app.use(matriculaRouter)
    app.use(nivelRouter)
    app.use(turmaRouter)
}