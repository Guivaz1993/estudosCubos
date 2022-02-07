const professores = [
    { nome: "Guido", stack: "Back" },
    { nome: "Vidal", stack: "Back" },
    { nome: "Dani", stack: "Front" },
    { nome: "Ruli", stack: "Front" }
];

const buscador = (array, filtro) => {
    const lista = [];

    for (let professor of array) {
        if (filtro(professor)) {
            lista.push(professor);
        }
    }
    console.log(lista);
}

buscador(professores, (professor) => {
    return professor.stack === "Back"
})