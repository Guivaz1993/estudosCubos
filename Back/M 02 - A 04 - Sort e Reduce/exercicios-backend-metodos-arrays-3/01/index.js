// a) Ordenar o array abaixo em ordem crescente.

const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

numeros.sort((a, b) => {
    return a - b
})

console.log(numeros);

// b) Ordenar o array abaixo em ordem decrescente.

const numerosb = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

numerosb.sort((a, b) => {
    return b - a
})

console.log(numerosb);

// c) Ordenar o array abaixo em ordem crescente, com base nos valores dos pontos de código Unicode.

const numerosc = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

numerosc.sort();

console.log(numerosc)

// d) Ordenar o array abaixo em ordem alfabética.

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

const frutasOrdem1 = frutas.sort((a, b) => {
    return a.localeCompare(b)
});

console.log(frutasOrdem1);
// e) Ordenar o array abaixo em ordem alfabética decrescente.

const frutas2 = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

const frutasOrdem2 = frutas.sort((a, b) => {
    return b.localeCompare(a)
});

console.log(frutasOrdem2);

// f) Ordenar o array abaixo em ordem crescente, de acordo com a quantidade de caracters (do que tem menos caracteres, para o que tem mais).

const frutas3 = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

frutas3.sort((a, b) => {
    return a.length - b.length
})

console.log(frutas3)