const { format } = require('date-fns');

function formatoA(data) {
    const parametro = "dd 'de' MMMM 'de' yyyy";

    console.log(format(data, parametro));
}

function formatoB(data) {
    const parametro = "dd/MM/yyyy";

    console.log(format(data, parametro));
}

function formatoC(data) {
    const parametro = "d MMM";

    console.log(format(data, parametro));
}

function formatoD(data) {
    const parametro = "dd MMM yyyy";

    console.log(format(data, parametro));
}

function formatoE(data) {
    const parametro = "dd 'de' MMM 'de' yyyy";

    console.log(format(data, parametro));
}

function formatoF(data) {
    const parametro = "dd/MMM";

    console.log(format(data, parametro));
}

const dia = new Date(2020, 9, 5);

formatoA(dia);
formatoB(dia);
formatoC(dia);
formatoD(dia);
formatoE(dia);
formatoF(dia);