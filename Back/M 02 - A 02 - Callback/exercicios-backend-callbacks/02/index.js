const tabuada = (arrayNumero, resultado) => {
    for (let numero of arrayNumero) {
        for (let indice = 0; indice <= 10; indice++) {
            console.log(resultado(numero, indice));
        }
        console.log("---------------------")
    }
}

const conta = (n, i) => {
    const res = i * n;
    const frase = `${n} x ${i} = ${res}`;
    return frase;
}

const array = [2, 3, 4, 5];

tabuada(array, conta);