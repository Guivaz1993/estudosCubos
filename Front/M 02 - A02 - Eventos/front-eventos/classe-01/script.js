const input = document.querySelector('input');
const itens = document.querySelectorAll('li');

input.addEventListener('keydown', buscar)

function buscar(event) {
    if (event.code === "Enter") {
        itens.forEach(iten => {
            iten.classList.remove('escondido')

            if (iten.textContent !== input.value && input.value) {
                iten.classList.add('escondido');
            }
        });
        input.value = "";
    }
}