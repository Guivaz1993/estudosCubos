// variaveis
let valorProduto = 100;
let numeroParcelas = 1;

if ( numeroParcelas === 1 ){
    let valorComDesconto = 100*0.9;
    console.log(`O valor do produto é  R$ ${valorProduto} e como você vai pagar a vista irá ter 10% de desconto totalizando ${valorComDesconto}.`)
} else {
    let valorparcela=valorProduto/numeroParcelas
    console.log(`O valor do produto é R$ ${valorProduto} e como você irá pagar em ${numeroParcelas} parcelas irá dar R$ ${valorparcela} cada parcela.`)
}