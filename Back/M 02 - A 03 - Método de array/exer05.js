const compras = [
    { nome: "arroz", preco: 500 },
    { nome: "carne", preco: 3200 },
    { nome: "biscoito", preco: 400 },
    { nome: "banana", preco: 320 },
    { nome: "feijao", preco: 600 }
];

const comprasDesconto = compras.map((iten) => {
    const desconto = iten.preco * 0.1;
    const precoDesc = iten.preco - desconto;
    return { nome: iten.nome, preco: iten.preco, desconto: precoDesc }
})

console.log(comprasDesconto);