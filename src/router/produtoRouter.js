const app = require('express').Router();
const produtoController = require('../controller/produtoController');

app.get('/produtos', async (req, res) => {
    let dados = await produtoController.listar();

    res.send(dados);
});

app.get('/produtos/:id', async (req, res) => {
    let dados = await produtoController.buscarUm(req.params.id);

    res.send(dados);
});

app.delete('/produtos/:id', async (req, res) => {
    await produtoController.excluir(req.params.id);
    
    res.send(204); 
});

app.post('/produtos', async (req, res) => {
    await produtoController.cadastrar(req.body);

    res.send(201); //created
});

app.put('/produtos/:id', async (req, res) => {
    await produtoController.editar(req.body, req.params.id);

    res.send(req.body);
});

module.exports = app;