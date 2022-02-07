const professores = [
    { nome: "Guido", stack: "Back" },
    { nome: "Vidal", stack: "Back" },
    { nome: "Dani", stack: "Front" },
    { nome: "Ruli", stack: "Front" },
    { nome: "Dina", stack: "Front" },
    { nome: "Uthan", stack: "Back" },
    { nome: "Leo", stack: "Back" }
];

const filtroStack = (array, stack) => {
    const resultado = array.filter((professor) => {
        return professor.stack === stack;
    })
    return resultado;
}

console.log(filtroStack(professores, "Back"));
console.log(filtroStack(professores, "Front"));