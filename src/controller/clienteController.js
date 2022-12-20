const database = require('../connection/databaseConnection');

async function listar() {
    return await database.executar('SELECT * FROM tb_cliente');
}

async function buscarUm(id) {
    return await database.executar('SELECT * FROM tb_cliente WHERE id=' + id);    
}

function cadastrar() {
    return "Cadastrando cliente...";
}

module.exports = {
    listar, 
    cadastrar,
    buscarUm
};