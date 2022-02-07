const { format } = require('date-fns');

function taAberto(horario) {
    const abertura = new Date(+horario).setHours(8);
    const fechamento = new Date(+horario).setHours(18);

    if (+horario >= +abertura && +horario <= +fechamento &&
        horario.getDay() >= 1 && horario.getDay() <= 5) {
        console.log("true")
    } else {
        console.log("false")
    }
}

const horario = new Date(2020, 0, 1, 9);

taAberto(horario);