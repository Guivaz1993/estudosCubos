const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const novoArray = (array) => {
    let n = 0;
    const novoArrayFormatado = array.map((item) => {
        const novoTexto = `${n} - ${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`;
        n++
        return novoTexto
    });
    console.log(novoArrayFormatado);
}

novoArray(frutas);