const pessoa = {
    nome: "Ted", idade: 20, profissao: "Estudante", altura: 1.71,

    obterFaixa: function () {
        if (this.idade < 25) {
            return "jovem";
        } else if (this.idade < 66) {
            return "adulto";
        } else {
            return "idoso";
        }
    }
    ,
    apresentacao: function () {
        const faixa = this.obterFaixa(this.idade);

        console.log(`Olá! meu nome é ${this.nome}, eu sou um ${faixa} de ${this.idade} anos, ${this.altura}m de altura e sou ${this.profissao}`);
    }
}

pessoa.apresentacao();