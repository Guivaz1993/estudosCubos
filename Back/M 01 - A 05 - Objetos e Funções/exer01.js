const pessoa = {
    nome: "Guilherme", idade: 28, altura: 1.71, temCNH: true, apelidos: ["Gui", "Mestre"]
}
pessoa.apelidos.push("Gago");
const propriedade1 = "nome";
const carta = (pessoa.temCNH ? "tem carta de motorista" : "não tem carta de motorista")
console.log(`${pessoa[propriedade1]} tem ${pessoa.idade} anos, ${pessoa["altura"]}m de altura, ${carta} e possui os seguintes apelidos:`);
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
}