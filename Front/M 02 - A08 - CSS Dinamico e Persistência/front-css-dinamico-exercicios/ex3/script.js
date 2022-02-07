const squares = document.querySelectorAll('.square');
const body = document.querySelector('body');

squares.forEach((square) => {
    square.addEventListener('click', (element) => {
        body.style.setProperty('--primary-color', element.target.id)
    })
})