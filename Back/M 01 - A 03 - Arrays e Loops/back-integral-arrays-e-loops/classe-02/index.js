const letras = ["A", "a", "B", "C" , "E", "e"];

let letrasE = 0 ;

for (let letra of letras){
    if(letra==="E" || letra === "e"){
        letrasE ++;
    }
}

const plural = (letrasE === 1 ? `Foi encontrada 1 letra`:`Foram encontradas ${letrasE} letras`);

if(letrasE===0){
    console.log('Nenhuma letra "e" ou "E" foi encontrada.');
} else {
    console.log(`${plural} "E" ou "e".`);
}