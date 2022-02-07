const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = 'Guerra e Paz';

const buscarLivro = (livro, array) => {
    const resultado = array.findIndex((item) => {
        return item === livro;
    })

    console.log(`O livro está na posição ${resultado + 1}.`)
}

buscarLivro(nomeDoLivro, livros);