function imprimirdeTrasParaFrente(texto) {
    const inverso = texto.split("");
    console.log(inverso);
    inverso.reverse();
    // let resultado = "";
    // // for (let letra of inverso) {
    //     resultado += letra;

    // }

    // console.log(resultado)
    console.log(inverso.join(""));
}

imprimirdeTrasParaFrente("olá");