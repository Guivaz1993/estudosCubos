const carros = [
    { modelo: "Argo", marca: "Fiat", ano: 2021, cor: "cinza" },
    { modelo: "Punto", marca: "Fiat", ano: 2012, cor: "prata" },
    { modelo: "Ka", marca: "Ford", ano: 2019, cor: "prata" },
    { modelo: "HB20", marca: "Hyundai", ano: 2020, cor: "branco" },
    { modelo: "Renegate", marca: "Jeep", ano: 2018, cor: "preto" }
];

const buscarCarro = (carro, array) => {
    return array.find((item) => {
        return item.modelo === carro
    });
}

console.log(buscarCarro("Argo", carros));

