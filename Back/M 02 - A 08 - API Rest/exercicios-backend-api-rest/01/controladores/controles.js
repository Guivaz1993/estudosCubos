let { identificador, alunos } = require('../dados/alunos')

function lista(req, res) {
    return res.status(200).json(alunos)
}

function filtro(req, res) {
    const { id } = req.params;

    const idValido = isNaN(Number(id));

    if (idValido) {
        return res.status(400).json({ "mensagem": "O id deve ser um número válido." })
    };

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id)
    });

    if (!aluno) {
        return res.status(400).json({ "mensagem": "Aluno não encontrado." })
    };

    return res.status(200).json(aluno);
}

function cadastrar(req, res) {
    const { nome, sobrenome, idade,
        curso } = req.body;

    if (!nome || nome.trim() === "") {
        return res.status(400).json({ "mensagem": "Nome não informado" })
    };
    if (!sobrenome || sobrenome.trim() === "") {
        return res.status(400).json({ "mensagem": "Sobrenome não informado" })
    };
    if (!idade || isNaN(Number(idade))) {
        return res.status(400).json({ "mensagem": "Idade não informada" })
    };
    if (!curso || curso.trim() === "") {
        return res.status(400).json({ "mensagem": "Curso não informado" })
    };

    if (Number(idade) < 18) {
        return res.status(400).json({ "mensagem": "Idade abaixo de 18 anos" })
    };

    const novoAluno = {
        id: identificador++,
        nome: nome,
        sobrenome: sobrenome,
        idade: Number(idade),
        curso: curso
    };

    alunos.push(novoAluno);
    res.status(201).send()
}

function deletar(req, res) {
    const { id } = req.params;

    const idValido = isNaN(Number(id));

    if (idValido) {
        return res.status(400).json({ "mensagem": "O id deve ser um número válido." })
    };

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id)
    });
    if (!aluno) {
        return res.status(404).json({ "mensagem": "Aluno não encontrado." })
    };

    alunos = alunos.filter((aluno) => {
        return aluno.id !== Number(id)
    });

    return res.status(200).json(aluno);
}



module.exports = {
    lista, filtro, cadastrar, deletar
}