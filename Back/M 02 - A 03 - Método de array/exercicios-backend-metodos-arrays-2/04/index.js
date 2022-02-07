const numeros = [0, 122, 4, 6, 8, 44, 7]

const temPar = (array) => {
    const resposta = array.every((numero) => {
        return numero % 2 === 0
    }
    )
    console.log(resposta)

    if (resposta) {
        console.log("array válido")
    } else {
        console.log("array inválido")
    }
}

temPar(numeros);