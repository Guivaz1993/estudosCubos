const express = require('express');
const convidados = require('./controladores/convidados')

const rotas = express();

// rotas.get('/convidados', convidados.listagem)
rotas.get('/convidados', convidados.estaNaLista)
rotas.post('/convidados', convidados.addConvidado)
rotas.delete('/convidados/:nome', convidados.del)

module.exports = rotas