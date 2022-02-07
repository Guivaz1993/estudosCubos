const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
]
const profissao1 = ["Programador"];
const profissao2 = ["Jornalista"];
const profissao3 = ["Programador", "Jornalista"];

const filtroPessoa = (array, MaxIdade, MinIdade, profissoes) => {
    let filtroIdadeInicio = [];

    function filtroIda() {
        if (MinIdade !== "") {
            if (MaxIdade !== "") {
                const filtroIdade = array.filter((pessoa) => {
                    return pessoa.idade > MinIdade && pessoa.idade < MaxIdade
                })
                filtroIdadeInicio = filtroIdade;
            } else {
                const filtroIdade = array.filter((pessoa) => {
                    return pessoa.idade > MinIdade
                })
                filtroIdadeInicio = filtroIdade;
            }
        } else if (MaxIdade !== "") {
            const filtroIdade = array.filter((pessoa) => {
                return pessoa.idade < MaxIdade
            })
            filtroIdadeInicio = filtroIdade;
        } else {
            const filtroIdade = array.filter((pessoa) => {
                return pessoa

            })
            filtroIdadeInicio = filtroIdade;
        }
        return filtroIdadeInicio
    }
    const filtroProfInicio = filtroIda()

    let arrayFinal = [];

    for (let j = 0; j < filtroProfInicio.length; j++) {
        for (let i = 0; i < profissoes.length; i++) {
            if (filtroProfInicio[j].profissao === profissoes[i]) {
                arrayFinal.push(filtroProfInicio[j]);
            }
        }
    }

    console.log(arrayFinal);

    console.log("-------------------")
}

filtroPessoa(pessoas, "", 20, profissao1)
filtroPessoa(pessoas, "", 30, profissao2)
filtroPessoa(pessoas, 30, "", profissao3)


