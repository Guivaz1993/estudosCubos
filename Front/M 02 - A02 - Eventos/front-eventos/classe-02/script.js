const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("change", function (event) {
        const inputMod = event.target;

        inputMod.classList.remove("acerto");

        if (inputMod.value === input.dataset.resposta) {
            inputMod.classList.add("acerto");
        }
    })
});