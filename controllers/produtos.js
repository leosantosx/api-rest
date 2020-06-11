const Produtos = require('../models/produtos')

module.exports = app => {

    app.get("/produtos", (req, res) => {
        Produtos.lista(res)
    })

    app.get("/produtos/:matricula", (req, res) => {
        const matricula = parseInt(req.params.matricula)
        Produtos.buscaPorId(matricula, res)
    })
    
    app.post("/produtos", (req, res) => {
        const produtos = req.body
        Produtos.adiciona(produtos, res) 
    })

    app.delete("/produtos/:id", (req, res) => {
        const id = parseInt(req.params.id)
        Produtos.deleta(id, res)
    })


}