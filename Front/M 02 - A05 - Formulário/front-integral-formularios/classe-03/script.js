const pagode = [
    "Camisa 10",
    "Tá vendo aquela lua",
    "O mundo da voltas",
    "Golaço - Vou pro sereno",
    "Até que durou",
    "Fora dos stories",
    "Adorei - Menos é mais",
    "Bebe e vem me procurar",
    "Sua mãe vai me amar",
    "Lancinho"
];

const sertanejo = [
    "Toma toma Vapo vapo",
    "Arranhão",
    "Molhando o volante",
    "A maior saudade",
    "Imagina a sentada - Matheus e Kauan",
    "Dar uma namorada",
    "Bloqueado - gusttao lima",
    "Vai lá em casa hoje",
    "Vamo tomar uma",
    "Ela e ela"
];

const funk = [
    "Set dos casados",
    "Bala Love",
    "Ela me falou que quer rave",
    "Bota a mão no chão",
    "Galopa",
    "Mete a louca",
    "Me sinto abençoado",
];

const genero = document.querySelector('#genero');
const musica = document.querySelector(".musica");
const form = document.querySelector("form")

genero.addEventListener("change", (event) => {
    if (genero.value === "") {
        musica.value = "";
    } else {
        let indexRandom
        if (genero.value === "Pagode") {
            indexRandom = Math.floor(Math.random() * pagode.length);
            musica.value = pagode[indexRandom]

        } else if (genero.value === "Sertanejo") {
            indexRandom = Math.floor(Math.random() * sertanejo.length);
            musica.value = sertanejo[indexRandom]

        } else {
            indexRandom = Math.floor(Math.random() * funk.length);
            musica.value = funk[indexRandom]

        }
    }
})

form.addEventListener("submit", (event) => {
    if (genero.value === "") {
        event.preventDefault()
    }
})
