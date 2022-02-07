const numeros = [3, 24, 1, 8, 11, 7, 15];

let higherN = 0;

for ( let number of numeros){
    if(number>higherN){
        higherN=number;
    }
}

console.log(higherN);
