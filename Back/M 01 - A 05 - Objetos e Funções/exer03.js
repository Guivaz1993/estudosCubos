const cliente = {
    nome: "Guilherme", idade: 28, produtos: [
        {
            produto: "Pizza", precoUnit: 20, qtd: 2
        },
        {
            produto: "Cerveja", precoUnit: 7, qtd: 1
        },
        {
            produto: "Sorvete", precoUnit: 10, qtd: 1
        }
    ]
}
let conta = 0;
for (let i = 0; i < cliente.produtos.length; i++) {
    conta += (cliente.produtos[i].precoUnit * cliente.produtos[i].qtd);
}


console.log(`A conta total de ${cliente["nome"]} deu R$ ${conta}`);