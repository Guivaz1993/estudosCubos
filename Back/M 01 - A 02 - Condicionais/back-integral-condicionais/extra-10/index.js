const caractere = "E";
let tipoDeCaractere =typeof(caractere);

if (tipoDeCaractere === "string"){
    if (caractere === "A" || caractere === "E"||caractere === "I"||caractere === "O"||caractere === "U"){
    console.log("Vogal maiúsculo");
    } else if (caractere === "a" || caractere === "e"||caractere === "i"||caractere === "o"||caractere === "u"){
    console.log("Vogal minúsculo")
    } else {
        console.log("Consoante");
    }
} else {
    console.log("Número");
}