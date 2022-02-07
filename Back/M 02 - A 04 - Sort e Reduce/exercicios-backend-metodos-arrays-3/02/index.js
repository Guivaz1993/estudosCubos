const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Rio de Janeiro",
    "Recife"
]


const resposta = cidades.reduce((acumulador, valorAtual) => {
    let cidade = acumulador;

    if (cidade.length < valorAtual.length) {
        cidade = valorAtual;
    }

    return cidade
})

console.log(resposta)