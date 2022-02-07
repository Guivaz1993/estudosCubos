const calculadoraIMC = (peso, altura, imprimir) => {
    const imc = peso / (altura * altura);

    let faixa;

    if (imc < 18) {
        faixa = "Desnutrição";
    } else if (imc <= 25) {
        faixa = "Normal";
    } else {
        faixa = "Sobrepeso";
    }

    imprimir(imc, faixa);
}

const qualAFaixa = (valor, faixa) => {
    console.log(`Seu IMC é ${valor.toFixed(2)}. Sua faixa é ${faixa}`);

}

calculadoraIMC(60.3, 1.70, qualAFaixa);

