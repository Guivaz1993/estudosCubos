const microondas = (tempo) => {
    console.log("Começou");

    let numero = 1;

    const contagem = () => {
        console.log(numero);
        numero++;

        if (numero > tempo) {
            console.log("Acabou");
            clearInterval(id);
        }
    }

    const id = setInterval(contagem, 1000);
}


microondas(10);
