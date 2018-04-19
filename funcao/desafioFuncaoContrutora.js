function Pessoa (nome) {
    this.nome = nome
    this.falar = function () {
        console.log(`Olá meu nome é ${this.nome}`)
    }
}

const p1 = Pessoa('João')
console.log(p1)



// A forma de comparação com a Factory é a mesma em relação a Class