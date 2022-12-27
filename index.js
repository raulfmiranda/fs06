const app = require('express')();
app.use(require('express').json());
const porta = '8000';

// importar cada router que foi criado
const veiculoRouter = require('./src/router/veiculoRouter');
const clienteRouter = require('./src/router/clienteRouter');
const produtoRouter = require('./src/router/produtoRouter');

// para habilitar as novas rotas
app.use('/', veiculoRouter);
app.use('/', clienteRouter);
app.use('/', produtoRouter);

app.listen(porta, () => {
    console.log('API rodando no endereço http://localhost:8000')
});
