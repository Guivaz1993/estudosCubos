const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;


//criado uma variavel extra para ficar mais reutilizavel
function grupoDe3Carros(car, position, tamanho) {
    const grupo = car.slice(position, position + tamanho);
    let grupoTexto = ""
    for (let i = 0; i < grupo.length; i++) {
        if (i === grupo.length - 1) {
            grupoTexto += `${grupo[i]}`
        } else {
            grupoTexto += `${grupo[i]} - `;
        }
    }
    console.log(grupoTexto);
}

grupoDe3Carros(nomes, posicao, 3);