const express = require("express")
const pessoaRouter = require("./pessoaRouter")

module.exports = (app) => {
    app.use(express.json())
    app.use(pessoaRouter)
}