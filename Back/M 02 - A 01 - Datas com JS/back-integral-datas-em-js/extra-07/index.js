const { addDays } = require('date-fns');

function promocao(inicio, momento) {
    const final = addDays(new Date(inicio), 30);

    return (+momento >= +inicio &&
        +momento <= +final);
}

const inicioDaPromocao = new Date(2021, 3, 27, 18, 30);

const solicitacaoDeUso = new Date(2021, 4, 27, 18, 39, 59, 999);

console.log(promocao(inicioDaPromocao, solicitacaoDeUso));