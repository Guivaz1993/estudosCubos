const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    total: 0,
    qtdProdutos: 0,
    desconto: 0,
    calcularTotalDeItens: function () {
        this.qtdProdutos = 0;
        for (let item of this.produtos) {
            this.qtdProdutos += item.qtd;
        }
    },
    calcularTotalAPagar: function () {
        this.total = 0
        for (let item of this.produtos) {
            const totalProduto = (item.precoUnit * item.qtd)
            this.total += totalProduto;
        }
    },
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        this.calcularDesconto();
    },
    addProduto: function (produto) {
        let novoProduto = false
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === produto.id) {
                this.produtos[i].qtd = this.produtos[i].qtd + produto.qtd;
                novoProduto = true;
                break
            }
        }
        if (!novoProduto) {
            this.produtos.push(produto);
        }
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}
        `);

        for (let item of this.produtos) {
            console.log(`Item ${item.id} - ${item.nome} - ${item.qtd} - R$ ${((item.qtd * item.precoUnit) / 100).toFixed(2)}`)
        }
        this.calcularDesconto();
    },
    calcularDesconto() {
        this.calcularTotalAPagar();
        this.calcularTotalDeItens();
        let dMenorValor = Infinity;
        let d10porcento = 0;
        if (this.total >= 10000) {
            d10porcento = this.total * 0.1
        }
        if (this.qtdProdutos > 4) {
            for (let item of this.produtos) {
                if (dMenorValor > item.precoUnit) {
                    dMenorValor = item.precoUnit
                }
            }
        }
        if (dMenorValor > d10porcento && dMenorValor != Infinity) {
            this.total -= dMenorValor;
            console.log(`
Desconto: R$${(dMenorValor / 100).toFixed(2)}`)
        } else {
            this.total -= d10porcento;
            console.log(`
Desconto: R$${(d10porcento / 100).toFixed(2)}`)
        }
        console.log(`
Total de itens: ${this.qtdProdutos} itens
Total a pagar: R$ ${(this.total / 100).toFixed(2)}`);

    }
}
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novaBermuda);
carrinho.imprimirResumo();
carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();

carrinho.imprimirDetalhes();