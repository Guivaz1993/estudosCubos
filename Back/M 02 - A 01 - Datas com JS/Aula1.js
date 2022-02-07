const { format } = require('date-fns');

//momento agora
// se colocar sem o new ele cria um string
const agora = new Date();

console.log(agora);

// colocar uma data
const date = new Date(2021, 0, 1, 12, 30, 20);

console.log(date);

//timestamp
const final = new Date(2002, 5, 30, 08, 00);
console.log(final);
const timestamp = +final + (1000 * 60 * 60);
//.getTime() - outra maneira de conseguir
const finaldate = new Date(timestamp);

console.log(finaldate);

console.log(format(finaldate, "dd-MMM-yy"));

