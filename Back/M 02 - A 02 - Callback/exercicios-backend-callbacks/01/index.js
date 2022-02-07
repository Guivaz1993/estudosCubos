const tabuada = (numero, resultado) => {
    for (let indice = 0; indice <= 10; indice++) {
        console.log(resultado(numero, indice));
    }
}

const conta = (n, i) => {
    const res = i * n;
    const frase = `${n} x ${i} = ${res}`;
    return frase;
}

tabuada(11, conta);