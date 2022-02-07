const body = document.querySelector('body')

fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then(function (resposta) {
    const promise = resposta.json();

    promise.then(function (fotos) {
        fotos.forEach((foto) => {
            const imagem = document.createElement('img');
            imagem.src = foto.url;

            const p = document.createElement('p');
            p.textContent = foto.title

            const div = document.createElement('div')
            div.append(imagem, p);
            body.append(div)
        });
    })
})