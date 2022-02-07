const btnNome = document.querySelector('#btn-save');
const welcome = document.querySelector('#welcome');
const input = document.querySelector('#input-name');

let nomeDefinido = localStorage.getItem('nome');
welcome.textContent = `Seja bem vindo, ${nomeDefinido}!`;

btnNome.addEventListener('click', () => {
    if (input.value === '') {
        return
    }

    localStorage.setItem('nome', nomeDefinido = input.value);

    welcome.textContent = `Seja bem vindo, ${nomeDefinido}!`;
})