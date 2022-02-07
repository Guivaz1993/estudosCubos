//Variaveis
let taxaDeJuros;
let montante=90000;
let capital=60000;
let parcelas=24;

//calculos
taxaDeJuros=(((montante/capital)**(1/parcelas))-1)*100;

console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${taxaDeJuros}% pois após ${parcelas} meses você teve que pagar ${montante} reais`);

