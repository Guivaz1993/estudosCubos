const microondas = (tempo) => {
    console.log("Começou");

    setTimeout(() => {
        console.log("Finalizou!")
    }, tempo * 1000)
}



microondas(2);