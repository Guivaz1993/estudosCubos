const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
]

const filtroNome = (array, letra) => {
    const arrayFiltrado = array.filter((item) => {
        return item[0].toLowerCase() === letra.toLowerCase()
    })
    console.log(arrayFiltrado);
}

filtroNome(nomes, "A");