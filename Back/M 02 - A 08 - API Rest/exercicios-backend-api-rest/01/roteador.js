const express = require('express');
const controles = require('./controladores/controles')

const rotas = express();

rotas.get('/alunos', controles.lista);
rotas.get('/alunos/:id', controles.filtro);
rotas.post('/alunos', controles.cadastrar);
rotas.delete('/alunos/:id', controles.deletar);

module.exports = rotas