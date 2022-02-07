const { format } = require('date-fns');

let alarme = "18:45:00";
let tempoAlarmandoEmSegundos = 5;
let tempoSonecaEmSegundos = 5;

const alarmeCelular = (alarme, duracao, tempoSoneca, repeticoes) => {

    let n = 0;
    let vezes = 0;
    let proximoAlarme = "";

    const beeep = () => {

        let hora = format(new Date(), "HH:mm:ss")

        if (alarme === hora || n > 0 || proximoAlarme === hora) {

            if (n === duracao) {

                n = 0;
                vezes++;

                if (vezes === repeticoes) {

                    console.log(`Alarme Finalizado!`)

                    clearInterval(id);

                }
                else {

                    const horaAlarme = +new Date() + (1000 * tempoSoneca);
                    proximoAlarme = format(horaAlarme, "HH:mm:ss");

                    console.log(`Soneca ativada, próximo alarme ${proximoAlarme}`);
                }
            }
            else {

                console.log('beep beep');
                n++

            }
        }
        else {

            console.log(hora);

        }
    }

    const id = setInterval(beeep, 1000);
}

const teste = "21:37:00"

alarmeCelular(teste, tempoAlarmandoEmSegundos, tempoSonecaEmSegundos, 1);