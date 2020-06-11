const conexao = require('../infraestrutura/conexao')

class Produtos {

    adiciona(produtos, res){
        const sql = `INSERT INTO produtos SET ?`

        conexao.query(sql, produtos, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(produtos);
            }
        })
    }

    lista(res){
        const sql = `SELECT * FROM produtos`

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(matricula, res){
        const sql = `SELECT id, matricula, cod, canal, COUNT(*) AS Total FROM produtos WHERE matricula=${matricula}`

        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    deleta(id, res){
        const sql = 'DELETE FROM produtos WHERE id=?'

        conexao.query(sql, id, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Produtos