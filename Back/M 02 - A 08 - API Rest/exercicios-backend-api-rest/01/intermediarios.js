const express = require('express');

const intermediario = (req, res, next) => {
    const { senha } = req.query
    if (senha !== 'cubos123') {
        res.status(401).json({ "mensagem": "Não autorizado." })
    }
    next()
}


module.exports = intermediario