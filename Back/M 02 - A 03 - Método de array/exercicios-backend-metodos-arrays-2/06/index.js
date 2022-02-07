const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const cidadesTamanho = (tamanho, array) => {
    const cidadesTamanhoCerto = array.filter((item) => {
        return item.length <= tamanho
    })
    // cidadesTamanhoCerto.forEach((cidade) => {
    //     console.log(cidade)
    // });
    console.log(cidadesTamanhoCerto.join(", "))
}

cidadesTamanho(8, cidades)