// variaveis
let valorProduto = 100;
let numeroParcelas = 10;
let juros=1;

if ( numeroParcelas === 1 ){
    let valorComDesconto = 100*0.9;
    console.log(`O valor do produto é  R$ ${valorProduto} e como você vai pagar a vista irá ter 10% de desconto totalizando ${valorComDesconto.toFixed(2)}.`)
} else if(numeroParcelas<=6){
    let valorparcela=valorProduto/numeroParcelas
    console.log(`O valor do produto é R$ ${valorProduto} e como você irá pagar em ${numeroParcelas} parcelas irá dar R$ ${valorparcela.toFixed(2)} cada parcela.`)
} else{
    valorProduto = (valorProduto *((1+juros/100)**numeroParcelas)).toFixed(2);
    let valorparcela=(valorProduto/numeroParcelas).toFixed(2)
    console.log(`O valor do produto com juros será R$ ${valorProduto} e como você irá pagar em ${numeroParcelas} parcelas irá dar R$ ${valorparcela} cada parcela.`)
}