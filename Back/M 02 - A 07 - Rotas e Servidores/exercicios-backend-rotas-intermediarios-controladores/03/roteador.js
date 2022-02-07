const express = require('express');
const { mostrarImoveis, filtrarImoveis } = require('./controladores/cImoveis')

const app = express();

const todos = app.get('/imoveis', mostrarImoveis)

const filtro = app.get('/imoveis/:id', filtrarImoveis)

module.exports = {
    app,
    todos,
    filtro
}