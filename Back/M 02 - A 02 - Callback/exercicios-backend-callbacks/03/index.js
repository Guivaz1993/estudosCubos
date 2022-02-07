const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal", "Guilherme"];

const rodada = (array, rodadas) => {
    let i = 0;
    let rodadaAtual = 0;

    const imprimirNome = () => {
        if (i === array.length) {
            console.log("Acabou a Rodada");
            i = 0
            rodadaAtual++;
            if (rodadaAtual === rodadas) {
                console.log("Fim de Jogo");
                clearInterval(id);
            }
        } else {
            console.log(array[i]);
            i++;
        }

    }

    const id = setInterval(imprimirNome, 10000 / array.length);

}



rodada(jogadores, 3);