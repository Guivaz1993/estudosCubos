const carros = [
    { modelo: "corola", marca: "toyota", ano: "2020", cor: "prata" },
    { modelo: "argo", marca: "Fiat", ano: "2021", cor: "preto" },
    { modelo: "Ranger", marca: "ford", ano: "2021", cor: "amarelo" },
    { modelo: "hilux", marca: "toyota", ano: "2018", cor: "branco" },
    { modelo: "ka", marca: "ford", ano: "2019", cor: "cinza" },
]

const ordenarCarros = (array, item) => {
    array.sort((a, b) => {
        return a[item].localeCompare(b[item])
    })
    console.log(array)
}

ordenarCarros(carros, "modelo")
ordenarCarros(carros, "marca")
ordenarCarros(carros, "cor")
ordenarCarros(carros, "ano")
