const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        const deposito = {
            tipo: "Depósito",
            valor: valor
        }
        this.historicos.push(deposito)
        console.log(`${deposito.tipo} de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`)
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para saque de: ${this.nome}.`);
        } else {
            this.saldo -= valor;
            const saque = {
                tipo: "Saque",
                valor: valor
            }
            this.historicos.push(saque)
            console.log(`${saque.tipo} de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}.`)
        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo}
Histórico:`);
        for (let transacao of this.historicos) {
            console.log(`${transacao.tipo} de R$${(transacao.valor / 100).toFixed(2)}`)
        }
    }
}

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();