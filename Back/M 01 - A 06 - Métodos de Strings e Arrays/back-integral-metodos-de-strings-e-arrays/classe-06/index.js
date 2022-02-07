const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

// primeiro

const invFrutas = frutas.reverse();
const strFrutas = invFrutas.join(", ")
console.log(strFrutas)

//segundo remover e adicionar
frutas.reverse();
frutas.shift();
frutas.pop();
frutas.push('Melão');
console.log(frutas)
