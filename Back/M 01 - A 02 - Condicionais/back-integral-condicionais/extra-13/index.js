//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorPago;

if(tipoDePagamento === "credito"){
    valorPago=((valorDoProduto*0.95)/100).toFixed(2);
    console.log(`Valor a ser pago: R$ ${valorPago} .`);
} else if (tipoDePagamento === "cheque"){
    valorPago=((valorDoProduto*0.97)/100).toFixed(2);
    console.log(`Valor a ser pago: R$ ${valorPago} .`);
} else{
    valorPago=((valorDoProduto*0.90)/100).toFixed(2);
    console.log(`Valor a ser pago: R$ ${valorPago} .`);
}