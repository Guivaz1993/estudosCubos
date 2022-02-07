const card = document.querySelector('.paises')
const input = document.querySelector('input')


fetch('https://restcountries.com/v2/all').then(function (resposta) {
    const promise = resposta.json();

    const nome = document.createElement('h2');
    const region = document.createElement('span');
    const capital = document.createElement('span');
    const pop = document.createElement('p');
    const dados = document.createElement('div');
    dados.classList.add("dados")
    const bandeira = document.createElement('img')

    input.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter') return

        promise.then(function (paises) {

            const certo = paises.filter((pais) => {
                return pais.name.toLowerCase() === input.value.toLowerCase()
            })


            if (certo.length === 1) {

                nome.textContent = certo[0].name;

                region.textContent = 'Region: ' + certo[0].region;

                capital.textContent = 'Capital: ' + certo[0].capital;

                pop.textContent = 'Population: ' + Number(certo[0].population).toLocaleString('pt-br') + ' hab'

                bandeira.src = certo[0].flag

            } else {
                nome.textContent = "";

                region.textContent = "";

                capital.textContent = "";

                pop.textContent = ""

                bandeira.src = ""
            }

            dados.append(nome, region, capital, pop)

            card.append(dados, bandeira)
        }
        )
    })
})