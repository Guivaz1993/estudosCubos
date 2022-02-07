const jogada1 = "papel"
const jogada2 = "tesoura"

if (jogada1===jogada2){
    console.log("Empate")
} else if(jogada1 === "pedra"){
    if (jogada2 === "papel"){
     console.log(jogada2);   
    }else{
        console.log(jogada1);
    }
} else if(jogada1 ==="papel"){
    if(jogada2 ==="tesoura"){
        console.log(jogada2);
    }else{
        console.log(jogada1);
    }
} else if (jogada1 ==="tesoura"){
    if(jogada2 === "papel"){
        console.log(jogada2);
    } else{
        console.log(jogada1);
    }
}

//seu código aqui