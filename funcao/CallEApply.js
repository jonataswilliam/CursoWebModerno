// A diferença entre o CALL e o APPLY é a forma em que passamos os parêmetros
function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    desc: 0.15,
    getPreco
}


global.preco = 20
global.desc = 0.1
console.log(getPreco());

console.log(produto.getPreco())


const carro = { preco: 4999, desc: 0.2 }
console.log (getPreco.call(carro))
console.log (getPreco.apply(carro))

// Quando chamamos uma funcao utilizando call passamos diretamente dentro do call, os parametros que serão passados para a funcao
console.log (getPreco.call(carro, 0.17, 'R$'))

// Com a funcao aplly passamos os parametros dentro de um array
console.log (getPreco.call(carro, [0.17, 'US$']))