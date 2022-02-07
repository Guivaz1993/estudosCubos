const input = document.querySelector('input');
const nome = document.querySelector('.nome-card');
const img = document.querySelector('img');
const hab = document.querySelector('.hab-1')
const divImg = document.querySelector('.imagem')
const erro = document.querySelector('p')
const hab2 = document.querySelector('.hab-2')
const divhab = document.querySelector('.habilidades-2')

input.addEventListener('change', function () {
    if (input.value === "") {
        nome.textContent = "";
        hab.textContent = "";
        erro.classList.add("display-none")
        divImg.classList.add("display-none")
        divhab.classList.add("display-none")
        return
    }


    const promiseResposta = fetch('https://pokeapi.co/api/v2/pokemon/' + input.value.toLowerCase())

    promiseResposta.then(function (resposta) {
        if (!resposta.ok) {
            nome.textContent = "";
            hab.textContent = "";
            erro.classList.remove("display-none")
            divImg.classList.add("display-none")
            divhab.classList.add("display-none")
            return
        }

        const promiseJson = resposta.json();

        promiseJson.then(function (body) {
            if (body.erro) {
                return
            }
            erro.classList.add("display-none")
            divImg.classList.remove("display-none")
            if (body.abilities.length === 2) {
                divhab.classList.remove("display-none")
            } else {
                divhab.classList.add("display-none")
            }
            nome.textContent = body.name[0].toUpperCase() + body.name.slice(1);
            img.src = body.sprites.front_default;
            hab.textContent = body.abilities[0].ability.name;
            hab2.textContent = body.abilities[1].ability.name;

        })
    })

})