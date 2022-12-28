const database = require('../connection/databaseConnection');

async function listar() {
    return await database.executar('SELECT * FROM tb_produto');
}

async function buscarUm(id) {
    return await database.executar('SELECT * FROM tb_produto WHERE id=' + id);    
}

async function cadastrar({nome, preco, quantidade, descricao, categoria}) {
    let sql = `INSERT INTO tb_produto (nome, preco, quantidade, descricao, categoria) 
                VALUES ('${nome}', '${preco}', '${quantidade}', '${descricao}', '${categoria}')`;

    await database.executar(sql);

    return {nome, preco, quantidade, descricao, categoria};
}

async function editar({nome, preco, quantidade, descricao, categoria}, id) {
    let sql = `UPDATE tb_produto SET nome='${nome}', preco='${preco}', quantidade='${quantidade}', descricao='${descricao}', categoria='${categoria}' WHERE id=${id}`;

    await database.executar(sql);
}

async function excluir(id) {
    let sql = "DELETE FROM tb_produto WHERE id="+id;

    await database.executar(sql);
}

module.exports = {
    listar, 
    cadastrar,
    buscarUm,
    editar,
    excluir
};