const database = require('../connection/databaseConnection');

async function listar() {
    let sql = `
        SELECT 
            vec.*, cli.nome AS cliente
        FROM tb_veiculo vec INNER JOIN tb_cliente cli
            ON vec.cliente_id = cli.id
    `; 

    return await database.executar(sql);
}

async function cadastrar({marca, modelo, ano}) { // marca, modelo, ano
    let sql = `INSERT INTO tb_veiculo (marca, modelo, ano) 
                VALUES ('${marca}', '${modelo}', '${ano}')`;

    await database.executar(sql);

    return {marca, modelo, ano};
}

async function editar({marca, modelo, ano}, id) {
    let sql = `UPDATE tb_veiculo SET marca='${marca}', modelo='${modelo}', ano='${ano}' WHERE id=${id}`;

    await database.executar(sql);
}

async function excluir(id) {
    let sql = "DELETE FROM tb_veiculo WHERE id="+id;

    await database.executar(sql);
}

async function buscarUm(id) {
    let sql = "SELECT * FROM tb_veiculo WHERE id="+id;

    let resultado = await database.executar(sql);

    return resultado[0];
}

module.exports = {  
    listar, 
    cadastrar,
    editar,
    excluir,
    buscarUm,
};