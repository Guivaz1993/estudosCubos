let identificador = "1123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

function idFormatacao(id) {
    const idFormatado = id.padStart(6, "0");
    console.log(idFormatado);
}
idFormatacao(identificador);

function nameFormatacao(name) {
    const nomeSemEspaco = name.split(" ")
    const nomeMaisculo = [];
    for (let nomes of nomeSemEspaco) {
        nomeMaisculo.push(`${nomes.slice(0, 1).toUpperCase()}${nomes.slice(1)}`);
    }
    const nomeCerto = nomeMaisculo.join(' ');
    console.log(nomeCerto);
}
nameFormatacao(nome);

function emailFormatacao(eMail) {
    const emailFormatado = eMail.trim();
    console.log(emailFormatado);
}
emailFormatacao(email);

function tagsFormatacao(tag) {
    const tagFormatada = tag.join(", ");
    console.log(tagFormatada);
}

tagsFormatacao(tags);