const convidados = [
    { pessoa: "Guilherme", idade: 28 },
    { pessoa: "Mariana", idade: 26 },
    { pessoa: "Bruno", idade: 23 },
    { pessoa: "Samuel", idade: 17 }
]

const fiscalIdade = (array) => {
    const resultado = array.every((individuo) => {
        return individuo.idade >= 18
    });

    if (resultado) {
        console.log("Festa Liberada");
    } else {
        console.log("Possui Menor de idade");
    }
}

fiscalIdade(convidados);
