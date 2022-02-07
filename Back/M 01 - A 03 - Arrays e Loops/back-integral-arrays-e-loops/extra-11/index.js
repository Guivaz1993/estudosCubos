const original = [5, 7, 13, 17, 26, 34, 118, 245];

const newArray = [];

for (let number of original){
    if(number>=10 && number<=20){
        newArray.push(number);
    } else if (number>100){
        newArray.push(number);
    }
}

console.log(newArray);