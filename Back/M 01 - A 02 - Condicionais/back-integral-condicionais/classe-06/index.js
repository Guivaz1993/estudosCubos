const alturaEmCm = 207;

//seu código aqui
if (alturaEmCm < 180){
    console.log("REPROVADO");
} else if (alturaEmCm < 186){
    console.log("LÍBERO");
} else if (alturaEmCm < 196){
    console.log("PONTEIRO");
} else if (alturaEmCm < 206){
    console.log("OPOSTO");
} else {
    console.log("CENTRAL");
}