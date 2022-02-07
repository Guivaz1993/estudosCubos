const imoveis = require('../dados/imoveis')


const mostrarImoveis = (req, res) => {
    res.send(imoveis)
}

function filtrarImoveis(require, response) {
    const imovel = imoveis.filter((iten) => {
        return iten.id === Number(require.params.id)
    })
    response.send(imovel)
}

module.exports = { mostrarImoveis, filtrarImoveis }