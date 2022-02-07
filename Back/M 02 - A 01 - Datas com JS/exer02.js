const finalinicio = new Date(2002, 5, 30, 08, 00);

const primeirots = +finalinicio + (1000 * 60 * 82);

const primeiro = new Date(primeirots);

const segundots = +finalinicio + (1000 * 60 * 94);

const segundo = new Date(+finalinicio + (1000 * 60 * (60 + 34)));

console.log(primeiro, segundo);
