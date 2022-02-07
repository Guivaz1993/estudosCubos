const senha = document.querySelector("#senha")
const confrima = document.querySelector("#confirma")
const formulario = document.querySelector("form")

formulario.addEventListener("submit", function (event) {

    if (senha.value !== confirma.value) {
        event.preventDefault();
    }

})