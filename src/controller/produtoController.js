const database = require('../connection/databaseConnection');

async function listar() {
    return await database.executar('SELECT * FROM tb_produto');
}

async function buscarUm(id) {
    return await database.executar('SELECT * FROM tb_produto WHERE id=' + id);    
}

function cadastrar() {
    return "Cadastrando produto...";
}

module.exports = {
    listar, 
    cadastrar,
    buscarUm
};