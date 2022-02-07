const cpf = "011.022.033-44";

function cpfSoNumero(documento) {
    let cpfSemponto = documento;
    let controle = "";
    while (cpfSemponto != controle) {
        controle = cpfSemponto;
        cpfSemponto = cpfSemponto.replace(".", "");
        cpfSemponto = cpfSemponto.replace("-", "");
    }
    console.log(cpfSemponto);
}

cpfSoNumero(cpf);