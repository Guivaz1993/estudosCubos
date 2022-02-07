const arquivos = [
    "HomemAranha.mp4", "Avengers.doc", "virus.bat"
];

const temVirus = (array) => {
    const resultado = array.some((item) => {
        return item.includes(".bat")
    })

    if (resultado) {
        console.log("Vírus detectado");
    } else {
        console.log("Nenhum vírus detectado")
    }
}

temVirus(arquivos)