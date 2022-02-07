const email = "aluno@cubos.academy";

function emailValido(eMail) {
    const temA = eMail.includes("@", 1);
    const temPonto = eMail.includes(".", 1);
    const pontoNoFim = eMail.includes(".", eMail.length - 1);
    if (temA && temPonto && !pontoNoFim) {
        console.log("E-mail válido");
    } else {
        console.log("E-mail inválido");
    }
}

emailValido(email);