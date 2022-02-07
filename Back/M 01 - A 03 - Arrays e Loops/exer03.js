const palavra = "plvr";

let letraA = 0;

for (let i of palavra){
    if(i==="a"){
        letraA++;        
    }
}

const frase = (letraA===1 ? "letra 'a'":"letras 'a'");

if(letraA===0){
    console.log("Não tem letra 'a' nessa palavra");
}else{
    console.log(`Tem ${letraA} ${frase} na palavra`);
}