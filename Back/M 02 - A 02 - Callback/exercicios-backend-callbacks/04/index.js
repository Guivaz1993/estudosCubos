const { format } = require('date-fns');

const alarme = "18:45:00";
let tempoAlarmandoEmSegundos = 10;

const alarmeCelular = (alarme, duracao) => {
    let n = 0;
    const beeep = () => {
        let hora = format(new Date(), "HH:mm:ss")
        if (alarme === hora || n > 0) {
            if (n === duracao) {
                clearInterval(id);
            } else {
                n++
                console.log('beep beep');
            }
        } else {
            console.log(hora);
        }

    }
    const id = setInterval(beeep, 1000);
}

const alarme2 = "21:05:00"
alarmeCelular(alarme2, 10);