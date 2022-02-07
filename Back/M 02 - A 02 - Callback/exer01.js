const imprimirDados = (dados) => {
    const nome = "Guilherme";
    const idade = 28;
    dados(nome, idade);
}

const dados = (nome, idade) => {
    console.log(`Nome: ${nome}`);

    if (idade) {
        const ano = new Date();

        console.log(`Ano de nascimento: ${ano.getFullYear() - idade}`);
    }
}

imprimirDados(dados);