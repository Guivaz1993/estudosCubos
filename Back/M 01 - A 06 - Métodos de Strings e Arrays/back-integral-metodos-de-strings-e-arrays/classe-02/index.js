const cpf = "12345678900";
const cnpj = "12345678901234";


function cpfValido(valor) {
    const valorSemEspaco = valor.trim();
    if (valorSemEspaco.length == 11) {
        let cpfFormatado = valorSemEspaco.slice(0, 3) + "." + valorSemEspaco.slice(3, 6) + "." + valorSemEspaco.slice(6, 9) + "-" + valorSemEspaco.slice(9);
        console.log(cpfFormatado);
    } else {
        console.log("CPF Inválido");
    }
}
function cnpjValido(valor) {
    const valorSemEspaco = valor.trim();
    if (valorSemEspaco.length == 14) {
        let cnpjFormatado = valorSemEspaco.slice(0, 2) + "." + valorSemEspaco.slice(2, 5) + "." + valorSemEspaco.slice(5, 8) + "/" + valorSemEspaco.slice(8, 12) + "-" + valorSemEspaco.slice(12);
        console.log(cnpjFormatado);
    } else {
        console.log("CNPJ Inválido");
    }
}

cpfValido(cpf);
cnpjValido(cnpj);
cnpjValido(cpf);
cpfValido(cnpj);