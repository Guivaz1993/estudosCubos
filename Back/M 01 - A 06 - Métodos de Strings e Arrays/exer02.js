function correcaoData(dia, mes, ano) {
    let diaCorrigido = `${dia}`;
    let mesCorrigido = `${mes}`;
    let anoCorrigido = `${ano}`
    diaCorrigido = diaCorrigido.padStart(2, "0");
    mesCorrigido = mesCorrigido.padStart(2, "0");
    if (ano > 50) {
        anoCorrigido = anoCorrigido.padStart(4, "19");
    } else {
        anoCorrigido = anoCorrigido.padStart(4, "20");
    }
    console.log(`${diaCorrigido}/${mesCorrigido}/${anoCorrigido}`)
}

correcaoData(1, 2, 19);
correcaoData(10, 2, 99);
correcaoData(1, 12, 55);

const array = [1, 2, 3, 4, 5, 6]
console.log(array);
const resultado = array.reverse();
console.log(array);
console.log(resultado)