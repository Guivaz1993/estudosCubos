const express = require('express');
const intermediario = require('./intermediarios');
const rotas = require('./roteador');

const app = express();

app.use(express.json());

app.use(intermediario);

app.use(rotas);

app.listen(3000)


