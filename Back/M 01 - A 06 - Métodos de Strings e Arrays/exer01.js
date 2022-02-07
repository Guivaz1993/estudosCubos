let preco = "97.50";
let milhar = "1,200,300"

let milharResultado = milhar;
let resultadoAnterior = "";

const decimais = preco.replace(".", ",");

console.log(decimais);

while (milharResultado !== resultadoAnterior) {
    resultadoAnterior = milharResultado;
    milharResultado = milharResultado.replace(",", ".");
}

console.log(milharResultado);