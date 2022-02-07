const arrayA = [5, 32, 3, 44, 1, 10];
const arrayB = [57, 4, 21, 2, 13, 2];

const low= [];

if(arrayA.length=arrayB.length){
    for ( let i = 0; i<arrayA.length; i++){
        let lowestNumeber = (arrayA[i]<arrayB[i] ? arrayA[i]:arrayB[i]);
        low.push(lowestNumeber);
    }
    console.log(low);
} else {
    console.log("Different array size");
}