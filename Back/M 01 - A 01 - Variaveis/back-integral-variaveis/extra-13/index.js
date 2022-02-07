//variaveis
let raio=3;
let altura=4;
const pi=Math.PI

//calculos

let areaBase=raio**2;
let areaLateral=2*raio*altura;
let areaTotal=2*areaBase+areaLateral;
let areaTotalpi=areaTotal*pi;

console.log(`Um cilindro com raio ${raio} e altura ${altura} apresenta área das bases de ${areaBase} PI e área lateral de ${areaLateral} PI, tendo assim uma área total de ${areaTotal} Pi ou ${areaTotalpi}`);
