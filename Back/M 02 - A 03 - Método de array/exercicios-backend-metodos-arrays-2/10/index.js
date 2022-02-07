const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const par = (array) => {
    const arrayPar = array.filter((item) => {
        return item % 2 === 0
    })
    console.log(arrayPar);
}

par(numeros);