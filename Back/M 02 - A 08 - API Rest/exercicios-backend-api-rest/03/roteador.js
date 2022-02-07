const express = require('express');
const livros = require('./controladores/livros')

const rotas = express();

rotas.get('/livros', livros.lista);
rotas.get('/livros/:id', livros.filtro);
rotas.post('/livros', livros.cadastrar);
rotas.put('/livros/:id', livros.substituir);
rotas.patch('/livros/:id', livros.alterar);
rotas.delete('/livros/:id', livros.excluir);

module.exports = rotas