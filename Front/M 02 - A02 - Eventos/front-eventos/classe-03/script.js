const btninscrever = document.querySelector(".btn");
const btnModal = document.querySelectorAll(".modal button")
const confirmar = document.querySelector(".confirmar")
const modal = document.querySelector(".modal")

btninscrever.addEventListener('click', inscrever);

confirmar.addEventListener('click', function () {
    btninscrever.textContent = "INSCREVER-SE";

    btninscrever.classList.remove("inscrito");

    btninscrever.addEventListener('click', inscrever);

})

function inscrever(event) {
    const botaoClicado = event.target;

    botaoClicado.textContent = "INSCRITO"
    botaoClicado.classList.add("inscrito")

    botaoClicado.removeEventListener('click', inscrever)

    botaoClicado.addEventListener('click', function () {
        modal.classList.remove("escondido")
    })
};


btnModal.forEach(botao => {
    botao.addEventListener('click', function () {
        modal.classList.add("escondido")
    })
});
