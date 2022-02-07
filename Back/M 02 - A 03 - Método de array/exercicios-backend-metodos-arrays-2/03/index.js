const palavras = ["arroz", "feijão", "carne", , "macarrão", "cerveja"]

const produtosProibidos = ["cerveja", "vodka"]

const temBebida = (proibidos, produtos) => {
    let bloqueada = false;
    const permitido = proibidos.forEach(item => {
        const produtoProibido = produtos.some((produto) => {
            return produto === item;
        })
        if (produtoProibido) {
            bloqueada = true;
        }
        return
    });

    if (bloqueada) {
        console.log("revise sua lista, joão. possui bebida com venda proibida!");
    } else {
        console.log("tudo certo, vamos as compras!");
    }
}

temBebida(produtosProibidos, palavras);