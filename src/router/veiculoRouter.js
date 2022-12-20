const app = require('express').Router();
const veiculoController = require('../controller/veiculoController');

app.get('/veiculos', async (req, res) => {
    let dados = await veiculoController.listar();

    res.send(dados);
});

app.get('/veiculos/:id', async (req, res) => {
    let dados = await veiculoController.buscarUm(req.params.id);

    res.send(dados);
});

app.delete('/veiculos/:id', async (req, res) => {
    await veiculoController.excluir(req.params.id);
    
    res.send(204); 
});

app.post('/veiculos', async (req, res) => {
    await veiculoController.cadastrar(req.body);

    res.send(201); //created
});

app.put('/veiculos/:id', async (req, res) => {
    await veiculoController.editar(req.body, req.params.id);

    res.send(req.body);
});

module.exports = app;