const celular = 71999918888;
const celular1 = 99918888;
const celular2 = 999918888;
const celular3 = 7199918888;
const celular4 = 719999188880;
const celular5 = 7199991;

function formataCelular(numero) {
    const numstr = `${numero}`;
    let resultado;

    if (numstr.length === 8) {
        resultado = `9 ${numstr.substr(0, 4)}-${numstr.substr(4, 4)}`;
        console.log(resultado);
    } else if (numstr.length === 9) {
        resultado = `${numstr.substr(0, 1)} ${numstr.substr(1, 4)}-${numstr.substr(5, 4)}`;
        console.log(resultado);
    } else if (numstr.length === 10) {
        resultado = `(${numstr.substr(0, 2)}) 9 ${numstr.substr(2, 4)}-${numstr.substr(6, 4)}`;
        console.log(resultado);
    } else if (numstr.length === 11) {
        resultado = `(${numstr.substr(0, 2)})  ${numstr.substr(2, 1)} ${numstr.substr(3, 4)}-${numstr.substr(7, 4)}`;
        console.log(resultado);
    } else {
        console.log("Formato de celular invalido")
    }
}

formataCelular(celular);
formataCelular(celular1);
formataCelular(celular2);
formataCelular(celular3);
formataCelular(celular4);
formataCelular(celular5);