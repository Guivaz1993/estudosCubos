const cep = document.querySelector('.cep');
const cidade = document.querySelector('#cidade');
const rua = document.querySelector('#rua');
const erro = document.querySelector('p')

cep.addEventListener('change', function () {

    if (cep.value.length === 8 || cep.value.length === 0) {
        erro.classList.add('display-none');
        cidade.value = "";
        rua.value = "";
    } else {
        erro.classList.remove('display-none');
        return
    }




    const promiseResposta = fetch('https://viacep.com.br/ws/' + cep.value + '/json/')

    promiseResposta.then(function (resposta) {
        if (!resposta.ok) {
            erro.classList.remove('display-none');
            return
        }

        const promiseJson = resposta.json();

        promiseJson.then(function (body) {
            if (body.erro) {
                erro.classList.remove('display-none');
                return
            }

            cidade.value = body.localidade;
            rua.value = body.logradouro;

        })
    })

})