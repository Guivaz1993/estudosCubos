const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];
const numeros1 = [1, -76, 0, 12, 19, 5, 60, 44];
const numeros2 = [1, 98, -76, 0, 12, 19, 5, 60, 44, 129];
const numeros3 = [1, 76, 0, 12, 19, 5, 60, 44];
const numeros4 = [-1, -98, -76, -12, -19, -5, -60, -44];

function maiorNumero(array) {
    const resposta = array.reduce((acumulador, valorAtual) => {
        let maior = acumulador;

        if (maior < valorAtual) {
            maior = valorAtual
        }

        return maior
    })

    console.log(resposta)
}

maiorNumero(numeros);
maiorNumero(numeros1);
maiorNumero(numeros2);
maiorNumero(numeros3);
maiorNumero(numeros4);