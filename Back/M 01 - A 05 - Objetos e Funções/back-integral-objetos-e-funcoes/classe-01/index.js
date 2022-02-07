const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(provas) {
    let certas = 0;
    let nDeQuestoes = 0;
    for (let questao of provas.questoes) {
        nDeQuestoes = nDeQuestoes + 1;
        if (questao.resposta === questao.correta) {
            certas = certas + 1;
        }
    }
    console.log(`O aluno(a) ${provas.aluno} acertou ${certas} questões e obteve nota ${certas / nDeQuestoes * 10}`);
}

corrigirProva(prova)

