const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
]

const buscarCEP = (cep, array) => {
    const ruaProcurada = array.find((rua) => {
        return rua.cep === cep
    })

    console.log(ruaProcurada.rua);
}

buscarCEP(00111222, endereços)