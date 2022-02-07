const texto = "Aprenda programar do zero na Cubos Academy";

function textoAmigavel(frase) {
    let resposta = frase.replaceAll(" ", "-");

    console.log(resposta);
}
textoAmigavel(texto)