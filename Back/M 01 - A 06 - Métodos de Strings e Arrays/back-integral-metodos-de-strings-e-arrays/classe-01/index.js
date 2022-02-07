const comentario = "Esse COVID é muito perigoso!";
const teste1 = "Eu gosto de bolo";
const teste2 = "A pandemia me Atrapalhou"

function comentarioValido(texto) {
    let avaliacao = texto.toUpperCase();
    const comCOVID = avaliacao.includes("COVID");
    const comPANDEMIA = avaliacao.includes("PANDEMIA");
    if (comCOVID || comPANDEMIA) {
        console.log("Comentário bloqueado por conter palavras proibidas");
    } else {
        console.log("Comentário autorizado");
    }
}

comentarioValido(comentario);
comentarioValido(teste1);
comentarioValido(teste2);