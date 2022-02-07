function soma(req, res) {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    const resposta = Number(num1) + Number(num2)

    res.send(`${resposta}`)
}

function subtracao(req, res) {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    const resposta = Number(num1) - Number(num2)

    res.send(`${resposta}`)
}

function multiplicacao(req, res) {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    const resposta = Number(num1) * Number(num2)

    res.send(`${resposta}`)
}

function divisao(req, res) {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    const resposta = Number(num1) / Number(num2)

    res.send(`${resposta}`)
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}