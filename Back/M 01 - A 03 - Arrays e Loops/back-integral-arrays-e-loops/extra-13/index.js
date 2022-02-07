const disjuntores = [false, false, true , false, true, false, false, true, false, false];

const onDisjuntores =[];

for (let i = 0 ; i <= disjuntores.length ; i ++){
    if(disjuntores[i]){
        onDisjuntores.push(i);
    }
}

console.log(onDisjuntores);