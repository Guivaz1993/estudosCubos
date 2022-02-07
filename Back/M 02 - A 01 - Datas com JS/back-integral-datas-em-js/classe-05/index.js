const { format } = require('date-fns');

function taAberto(horario) {
    const abertura = new Date(+horario).setHours(8);
    const fechamento = new Date(+horario).setHours(18);

    const fechamentoSab = new Date(+horario).setHours(12)

    if (+horario >= +abertura &&
        horario.getDay() >= 1 &&
        horario.getDay() <= 6) {
        if (+horario <= +fechamento &&
            horario.getDay() >= 1 &&
            horario.getDay() <= 5 ||
            +horario <= +fechamentoSab &&
            horario.getDay() === 6) {
            console.log("true")
        } else {
            console.log("false")
        }
    } else {
        console.log("false")
    }
}



taAberto(new Date(2021, 3, 25, 12)); // deve retornar false, pois é um domingo

taAberto(new Date(2021, 3, 26, 12)); // deve retornar true, pois é uma segunda

taAberto(new Date(2021, 3, 26, 7, 59)); // deve retornar false, pois é muito cedo (7h59)

taAberto(new Date(2021, 3, 24, 9, 30)); // deve retornar true, pois é sábado de manhã (9h30)