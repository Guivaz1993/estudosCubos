const numeros = [54, 22, 14, 87, 10, 284];

let temDez = false;

for ( let i=0; i<=numeros.length; i++){
    if(numeros[i]===10){
        console.log(i);
        temDez=true;
        break;
    }
}

if(!temDez){
    console.log(-1);
}