class Tabelas{
    init(conexao){
        this.conexao = conexao
        this.criarProdutos()
    }

    criarProdutos(){
        const sql = `CREATE TABLE IF NOT EXISTS produtos (
            id int NOT NULL AUTO_INCREMENT,
            matricula varchar(6) NOT NULL,
            cod varchar(30) NOT NULL,
            canal varchar(10) NOT NULL,
            PRIMARY KEY(id)
        )`
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela criada!');
            }
        })
    }
}

module.exports = new Tabelas