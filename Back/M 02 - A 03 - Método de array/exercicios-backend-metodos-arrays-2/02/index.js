const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const contadorCaracters = (quantidade, array) => {
    const resultado = array.every((palavra) => {
        return palavra.length < quantidade
    })

    if (resultado) {
        console.log('array validado');
    } else {
        console.log('existe palavra inválida');
    }
}

contadorCaracters(7, palavras)