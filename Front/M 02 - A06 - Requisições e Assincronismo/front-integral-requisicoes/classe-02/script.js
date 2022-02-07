const bitcoin = document.querySelector('select');
const maiorPreco = document.querySelector('.maior-preco');
const qtd = document.querySelector('.qtd-neg');
const oferta = document.querySelector('.maior-oferta')

bitcoin.addEventListener('change', function () {
    if (bitcoin.value === "") {
        maiorPreco.textContent = "";
        qtd.textContent = "";
        oferta.textContent = "";
        return
    }
    console.log(bitcoin.value)


    const promiseResposta = fetch('https://www.mercadobitcoin.net/api/' + bitcoin.value + '/ticker/')

    promiseResposta.then(function (resposta) {
        if (!resposta.ok) {
            return
        }

        const promiseJson = resposta.json();

        promiseJson.then(function (body) {
            if (body.erro) {
                return
            }
            maiorPreco.textContent = `R$ ${Number(body.ticker.high).toFixed(2)}`;
            qtd.textContent = body.ticker.vol;
            oferta.textContent = `R$ ${Number(body.ticker.buy).toFixed(2)}`;
        })
    })

})