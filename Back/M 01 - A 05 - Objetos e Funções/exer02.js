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

console.log(cliente.nome);

console.log(cliente["idade"]);

cliente.idade = 29;

console.log(cliente.idade);

console.log(cliente.produtos[0].produto);

console.log(cliente.produtos[cliente.produtos.length - 1].precoUnit);