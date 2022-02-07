const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const imagem = document.querySelectorAll(".imagens img");

imagem.forEach(input => {
    input.addEventListener("click", () => {
        imgModal.src = input.src;
        modal.style.display = "flex";
    })
})

modal.addEventListener("click", () => {
    modal.style.display = "none"
})