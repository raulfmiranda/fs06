const app = require('express').Router();
const clienteController = require('../controller/clienteController');

app.get('/clientes', async (req, res) => {
    let dados = await clienteController.listar();

    res.send(dados);
});

app.get('/clientes/:id', async (req, res) => {
    let dados = await clienteController.buscarUm(req.params.id);

    res.send(dados);
});

app.get('/clientes/:id/veiculos', async (req, res) => {
    res.send('testando...');
});

app.get('/clientes/:id/produtos', async (req, res) => {
    let dados = await clienteController.buscarProdutos(req.params.id);

    res.send(dados);
});

module.exports = app;