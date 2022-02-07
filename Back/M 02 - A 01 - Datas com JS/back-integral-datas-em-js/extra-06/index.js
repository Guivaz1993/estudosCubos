const { addHours } = require('date-fns');

function promocao(inicio, momento) {
    const final = addHours(new Date(inicio), 24);

    return (+momento >= +inicio &&
        +momento <= +final);
}

const inicioDaPromocao = new Date(2021, 3, 27, 18, 30);

const solicitacaoDeUso = new Date(2021, 3, 27, 19, 29, 59, 999);

console.log(promocao(inicioDaPromocao, solicitacaoDeUso));