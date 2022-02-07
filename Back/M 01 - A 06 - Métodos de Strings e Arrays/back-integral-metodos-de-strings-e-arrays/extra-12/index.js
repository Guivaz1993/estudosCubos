const nome = 'Guido Cerqueira';
const tamanho = 13;

function geradorNickname(nome, limite) {
    let nomeMin = nome;
    let controleMin = "";

    while (controleMin != nomeMin) {
        controleMin = nomeMin;
        nomeMin = nomeMin.toLowerCase();
    }
    const nomeSemEspaco = nomeMin.replace(" ", "");
    const nickname = nomeSemEspaco.substr(0, limite - 1);
    console.log(`@${nickname}`);
}

geradorNickname(nome, tamanho);