const express = require('express');
const app = express();

let cronometro = new Date()

cronometro.setMinutes(0);
cronometro.setSeconds(0);
cronometro.setMilliseconds(0);
let minutos;
let segundos;
let ligado = false
let funcionando = false;

function addSeg() {
    if (funcionando) {
        cronometro = +cronometro + 1000
        cronometro = new Date(cronometro)
    }
};

function partirTempo() {
    let id = setInterval(addSeg, 1000)
}

app.get('/', (req, res) => {
    minutos = cronometro.getMinutes().toString().padStart(2, "0")
    segundos = cronometro.getSeconds().toString().padStart(2, "0")

    res.send(`tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`)
});

app.get('/iniciar', (req, res) => {
    res.send(`Cronômetro iniciado!`)

    if (!ligado) {
        partirTempo();
        ligado = true
    }

    if (!funcionando) {
        funcionando = true
    }

});

app.get('/continuar', (req, res) => {
    res.send(`Cronômetro reiniciado`)
    if (ligado && !funcionando) {
        funcionando = true
    }
});

app.get('/zerar', (req, res) => {
    cronometro.setMinutes(0);
    cronometro.setSeconds(0);
    cronometro.setMilliseconds(0);

    res.send(`Cronômetro zerado!`)
})

app.get('/pausar', (req, res) => {

    funcionando = false

    res.send(`Cronômetro pausado!`)
})


app.listen(8000)

setInterval(() => {
    console.log(cronometro)
}, 1000);