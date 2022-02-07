const menuFechado = document.querySelector("aside");
const btnFechar = document.querySelector(".btn__abre");
const likesPag = document.querySelectorAll(".like")
const cards = document.querySelectorAll('.card__img');
const modal = document.querySelector('.modal');
const imgModal = document.querySelector('.modal__image')
const btnModal = document.querySelector('.img__btn-close')
const likeModal = document.querySelector('.modal__like')
const anterior = document.querySelector('.modal__button--previous')
const proximo = document.querySelector('.modal__button--next')

let imagemAtual = 0;
let likes = [];

// Função barra lateral
btnFechar.addEventListener(("click"), () => {
    const imagemFechar = document.querySelector(".open-close")

    if (menuFechado.classList.contains("fechado")) {
        imagemFechar.src = "./assets/open-menu.svg";
    } else {
        imagemFechar.src = "./assets/closed-menu.svg";
    }

    menuFechado.classList.toggle("fechado");
})

//função like na página
likesPag.forEach((like, index) => {
    like.addEventListener(("click"), () => {

        if (like.classList.contains("unlike")) {
            like.src = "./assets/inactive-like.svg"
            like.classList.remove("unlike");
            let posicao = likes.indexOf(index);
            likes.splice(posicao, 1);
        } else {
            like.src = "./assets/like.svg";
            like.classList.add("unlike");
            likes.push(index)
        }
    })
})

likeModal.addEventListener(("click"), () => {
    let MudarLikeModal = likes.includes(imagemAtual)

    if (MudarLikeModal) {

        likeModal.src = "./assets/inactive-like.svg";
        let posicao = likes.indexOf(imagemAtual);
        likes.splice(posicao, 1);
        likesPag[imagemAtual].src = "./assets/inactive-like.svg";
        likesPag[imagemAtual].classList.remove("unlike");

    } else {

        likeModal.src = "./assets/like.svg";
        likes.push(imagemAtual);
        likesPag[imagemAtual].src = "./assets/like.svg";
        likesPag[imagemAtual].classList.add("unlike")

    }
})

cards.forEach((card, index) => {
    card.addEventListener(("click"), (event) => {
        modal.classList.remove('modal__close');

        imagemAtual = index;
        updateImgModal(event.target);
        updateLikeModal(imagemAtual)

        if (imagemAtual === 0) {
            anterior.classList.add("botao__none")
        } else {
            anterior.classList.remove("botao__none")
        }

        if (imagemAtual === cards.length - 1) {
            proximo.classList.add("botao__none")
        } else {
            proximo.classList.remove("botao__none")
        }
    })
})

btnModal.addEventListener(("click"), () => {
    modal.classList.add('modal__close')
})

anterior.addEventListener(("click"), () => {
    imagemAtual--
    const novoImagem = cards[imagemAtual]

    updateImgModal(novoImagem)
    updateLikeModal(imagemAtual)

    if (imagemAtual === 0) {
        anterior.classList.add("botao__none")
    } else {
        proximo.classList.remove("botao__none")
    }
})

proximo.addEventListener(("click"), () => {
    imagemAtual++
    const novoImagem = cards[imagemAtual]
    updateImgModal(novoImagem)
    updateLikeModal(imagemAtual)

    if (imagemAtual === cards.length - 1) {
        proximo.classList.add("botao__none")
    } else {
        anterior.classList.remove("botao__none")
    }
})

function updateImgModal(iten) {
    imgModal.src = iten.src
}

function updateLikeModal(index) {
    let temLike = likes.includes(index);

    if (temLike) {
        likeModal.src = "./assets/like.svg";
    } else {
        likeModal.src = "./assets/inactive-like.svg"
    }
}