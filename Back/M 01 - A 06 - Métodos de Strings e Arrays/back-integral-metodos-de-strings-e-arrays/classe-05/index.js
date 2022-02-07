const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "A Divina Comédia";

function procurarLivro(nome) {
    const posicao = livros.indexOf(nome);
    console.log(`O livro está na posição ${posicao + 1}`)
}

procurarLivro(nomeDoLivro)