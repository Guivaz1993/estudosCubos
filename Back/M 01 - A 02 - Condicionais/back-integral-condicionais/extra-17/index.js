//valor do produto comprado.
const valorDoProduto = 200000;

//quantidade de parcelas
const quantidadeDoParcelamento = 20;

//valor pago
const valorPago = 1900;

let valorParcela = ((valorDoProduto/100)/quantidadeDoParcelamento);

let parcelasPagas = (valorPago/valorParcela);

let parcelasFaltantes = (quantidadeDoParcelamento - parcelasPagas);

let resta = (parcelasFaltantes>1?"Restam":"Resta");

let parcela = (parcelasFaltantes>1?"parcelas":"parcela");

console.log (`${resta} ${parcelasFaltantes} ${parcela} de R$${valorParcela.toFixed(2)}`);