const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda'];
const tamanhoDoGrupo = 4;

function divisaoEmGrupos(nomes, tamanho) {
    const grupo1 = nomes.slice(0, tamanho);
    const grupo2 = nomes.slice(tamanho);
    let texto1 = "Grupo 1:";
    let texto2 = "Grupo 2:";

    for (let i = 0; i < grupo1.length; i++) {
        if (i === (grupo1.length - 1)) {
            texto1 += ` ${grupo1[i]}.`;
        } else {
            texto1 += ` ${grupo1[i]}, `;
        }
    }
    for (let i = 0; i < grupo2.length; i++) {
        if (i === (grupo2.length - 1)) {
            texto2 += ` ${grupo2[i]}.`;
        } else {
            texto2 += ` ${grupo2[i]}, `;
        }
    }
    console.log(texto1);
    console.log(texto2);
}

divisaoEmGrupos(nomes, tamanhoDoGrupo);