const numberes = [1,4,9,8,11,18,7];

let highN = 0;
let lowN = Infinity;

for (let number of numberes){
    if(highN<=number){
        highN=number;
    }
    if(lowN>=number){
        lowN=number;
    }
}

const difference = highN-lowN;

console.log(`The difference between the higher and the lowest number is ${difference}.`);