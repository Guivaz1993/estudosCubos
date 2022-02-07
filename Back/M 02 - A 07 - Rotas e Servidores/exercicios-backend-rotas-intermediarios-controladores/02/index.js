const express = require('express');
const { qualOJogador, remover, adicionar } = require('./controladores/acoes')

const app = express();

app.get('/', qualOJogador)

app.get('/remover', remover)

app.get('/adicionar', adicionar)

app.listen(8000)