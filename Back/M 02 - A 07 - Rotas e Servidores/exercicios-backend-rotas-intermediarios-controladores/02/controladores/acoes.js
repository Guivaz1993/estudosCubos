const jogadores = require('../jogadores')

let i = 0;

function qualOJogador(req, res) {
    const jogadorVez = i % jogadores.length

    res.send(`É a vez de ${jogadores[jogadorVez]} jogar`)

    i++
}

function remover(req, res) {
    const removerJog = Number(req.query.indice)

    if (removerJog < jogadores.length) {
        jogadores.splice(2, 1)
        res.send(jogadores)
    } else {
        res.send(`Não existe jogador no índice informado (${removerJog}) para ser removido`)
    }

}

function adicionar(req, res) {
    const nome = req.query.nome;
    const nomeTratado = nome[0].toUpperCase() + nome.slice(1);
    const indice = Number(req.query.indice);

    if (req.query.indice) {
        if (indice >= jogadores.length) {
            res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`)
        } else {
            jogadores.splice(indice, 0, nomeTratado)
            res.send(jogadores)
        }

    } else {
        jogadores.push(nomeTratado)
        res.send(jogadores)
    }
}

module.exports = {
    qualOJogador,
    remover,
    adicionar
}