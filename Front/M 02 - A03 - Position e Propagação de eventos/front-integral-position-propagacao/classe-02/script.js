const faq = document.querySelector(".FAQ");
const imagem = document.querySelector("img");

imagem.addEventListener("click", (event) => {
    faq.classList.toggle("escondido");
})