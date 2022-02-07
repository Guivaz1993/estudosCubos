const numeros = [10, 987, -886, 0, 12, -199, 45, -67]

const positivos = (array) => {
    const arrayPositivo = array.filter((item) => {
        return item > 0
    })
    console.log(arrayPositivo);
}

positivos(numeros);