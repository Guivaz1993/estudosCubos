const olho = document.querySelector("img");
const senha = document.querySelector(".input__senha input")

olho.addEventListener("click", (event) => {
    if (senha.type === "password") {
        olho.src = "./assets/olho-aberto.svg";
        senha.type = "text";
    } else {
        olho.src = "./assets/olho-fechado.svg";
        senha.type = "password";
    }
})

