let { convidados } = require('../dados/bancoDeDados');

// const listagem = (req, res) => {
//     res.status(200).json(convidados)
// }

const estaNaLista = (req, res) => {
    const { nome } = req.query;

    if (!nome) {
        return res.status(200).json(convidados)
    }

    const naLista = convidados.some((convidado) => {
        return convidado.toLowerCase() === nome.toLowerCase()
    })

    if (naLista) {
        res.status(200).json({ "mensagem": "Convidado presente." })
    } else {
        res.status(400).json({ "mensagem": "O convidado buscado não está presente na lista." })
    }
}

const addConvidado = (req, res) => {
    const { nome } = req.body;

    const jaTem = convidados.some((convidado) => {
        return convidado.toLocaleLowerCase() === nome.toLocaleLowerCase()
    })

    if (jaTem) {
        res.status(400).json({ "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." })
    } else {
        convidados.push(nome)
        res.status(201).json({ "mensagem": "Convidado adicionado." })
    }

}

const del = (req, res) => {
    const { nome } = req.params;

    const convidado = convidados.find((convidado) => {
        return convidado.toLowerCase() === nome.toLowerCase()
    });
    if (!convidado) {
        res.status(404).json({ "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." })
    }

    convidados = convidados.filter((convidado) => {
        return convidado.toLowerCase() !== nome.toLowerCase()
    })

    res.status(200).json({
        "mensagem": "Convidado removido."
    })
}

module.exports = {
    estaNaLista, addConvidado, del
}

