const nomes = ["Guilherme" , "João", "Mariana", "José", "Caio", "Fatima"];

let encontrado = false

for ( let i=0;i<=nomes.length;i++){
    if (nomes[i] === "João"){
        console.log(i);
        encontrado=true;
        break
    }
}

if (!encontrado){
    console.log("Nome não encontrado")
}