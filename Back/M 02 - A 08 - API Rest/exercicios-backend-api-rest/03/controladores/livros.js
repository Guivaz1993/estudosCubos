let { livros, contador } = require('../dados/bancodedados');

const lista = (req, res) => {
    res.json(livros);
}

const filtro = (req, res) => {
    const { id } = req.params;

    if (isNaN(Number(id))) {
        return res.status(400).json({ "mensagem": "O valor do parâmetro ID da URL não é um número válido." })
    };

    const livro = livros.filter((livro) => {
        return livro.id === Number(id)
    })

    if (!livro[0]) {
        return res.status(404).json({
            "mensagem": "Não existe livro para o ID informado."
        })
    }

    res.json(livro);
}

const cadastrar = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo || titulo.trim() === "") {
        return res.status(400).json({ "mensagem": "titulo não informado." })
    };
    if (!autor || autor.trim() === "") {
        return res.status(400).json({ "mensagem": "Autor não informado." })
    };
    if (!ano || isNaN(Number(ano)) || String(ano).trim() === "") {
        return res.status(400).json({ "mensagem": "Ano não informado." })
    };
    if (!numPaginas || isNaN(Number(numPaginas)) || String(numPaginas).trim() === "") {
        return res.status(400).json({ "mensagem": "Número de páginas não informado." })
    };

    const novo = {
        id: contador++,
        titulo,
        autor,
        ano: Number(ano),
        numPaginas: Number(numPaginas)
    };

    livros.push(novo)
    res.status(201).json(novo);
}

const substituir = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (isNaN(Number(id))) {
        return res.status(400).json({ "mensagem": "O valor do parâmetro ID da URL não é um número válido." })
    };

    const temOId = livros.some((livro) => {
        return livro.id === Number(id)
    });

    if (!temOId) {
        return res.json({ "mensagem": "Não existe livro a ser alterado para o ID informado." })
    };

    const livro = livros.filter((livro) => {
        return livro.id === Number(id)
    });

    if (!titulo || titulo.trim() === "") {
        return res.json({ "mensagem": "Titulo não informado." })
    };
    if (!autor || autor.trim() === "" || String(ano).trim() === "") {
        return res.json({ "mensagem": "Autor não informado." })
    };
    if (!ano || isNaN(Number(ano)) || String(ano).trim() === "") {
        return res.json({ "mensagem": "Ano não informado." })
    };
    if (!numPaginas || isNaN(Number(numPaginas)) || String(numPaginas).trim() === "") {
        return res.json({ "mensagem": "Número de páginas não informado." })
    };

    livro[0].titulo = titulo.trim();
    livro[0].autor = autor.trim();
    livro[0].ano = Number(ano);
    livro[0].numPaginas = Number(numPaginas);

    res.status(200).json({ "mensagem": "Livro substituido." });
}

const alterar = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (isNaN(Number(id))) {
        return res.status(400).json({ "mensagem": "O valor do parâmetro ID da URL não é um número válido." })
    };

    const temOId = livros.some((livro) => {
        return livro.id === Number(id)
    });

    if (!temOId) {
        return res.json({ "mensagem": "Não existe livro a ser alterado para o ID informado." })
    };

    const livro = livros.filter((livro) => {
        return livro.id === Number(id)
    });

    if (titulo && titulo.trim() !== "") {
        livro[0].titulo = titulo.trim();
    };
    if (autor && autor.trim() !== "") {
        livro[0].autor = autor.trim();
    };
    if (ano &&
        (String(ano).trim() !== "" || !isNaN(Number(ano)))
    ) {
        livro[0].ano = Number(ano);
    };
    if (numPaginas &&
        (!isNaN(Number(numPaginas)) || String(numPaginas).trim() !== "")
    ) {
        livro[0].numPaginas = Number(numPaginas);
    };

    res.status(200).json({ "mensagem": "Livro alterado." });
};

const excluir = (req, res) => {
    const { id } = req.params;

    const idValido = isNaN(Number(id));

    if (idValido) {
        return res.status(400).json({ "mensagem": "O id deve ser um número válido." })
    };

    const livro = livros.find((livro) => {
        return livro.id === Number(id)
    });
    if (!livro) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser removido para o ID informado." })
    };

    livros = livros.filter((livro) => {
        return livro.id !== Number(id)
    });

    return res.status(200).json({ "mensagem": "Livro removido." });
}

module.exports = {
    lista,
    filtro,
    cadastrar,
    substituir,
    alterar,
    excluir
}