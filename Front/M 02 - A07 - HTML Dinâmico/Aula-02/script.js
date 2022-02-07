const input = document.querySelector('input')
const lista = document.querySelector('ul')

input.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || input.value === "") return

    const item = document.createElement('li')
    const p = document.createElement('p')
    const btn = document.createElement('button')

    btn.textContent = "OK"
    btn.addEventListener('click', () => {
        item.remove()
    })

    p.textContent = input.value;
    p.addEventListener('click', () => {
        p.classList.toggle('riscado')
    })
    item.append(p, btn)

    lista.append(item)

    input.value = ""
})

