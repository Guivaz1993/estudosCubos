const nomeArquivo = 'Foto da Familia.png';

function eImagem(arquivo) {
    const localizacaoPonto = arquivo.indexOf(".");
    const formato = arquivo.substr(localizacaoPonto + 1);
    if (formato === "jpg" || formato === "jpeg" || formato === "gif" || formato === "png") {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    }
}

eImagem(nomeArquivo);