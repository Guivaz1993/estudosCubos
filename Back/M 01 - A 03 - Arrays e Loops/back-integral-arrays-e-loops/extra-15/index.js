const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

// for ( let number of original){
//     if(number%2===0){
//         pares.push(number);
//     }else{
//         impares.push(number);
//     }
// }

// let i=0;
// while (i < original.length){
//     if(original[i]%2===1){
//         impares.push(original[i]);
//     } else{
//         pares.push(original[i]);
// }
//     i++;
// }

for (let i=0; i<original.length;i++){
    if(original[i]%2===0){
        pares.push(original[i]);
    } else {
        impares.push(original[i]);
    }
}


console.log(pares);
console.log(impares);