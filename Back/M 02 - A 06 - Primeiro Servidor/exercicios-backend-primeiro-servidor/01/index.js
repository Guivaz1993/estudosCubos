const express = require('express');
const app = express()

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let i = 0
app.get('/', (req, res) => {
    const jogadorVez = i % jogadores.length

    res.send(`É a vez de ${jogadores[jogadorVez]} jogar`)
    i++
})

app.listen(3000)