// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log (a + b)
}

imprimirSoma(5, 2)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log (soma(1, 3))


// Forma mais reduzida da funcao arrow com retorno implicito
const subtracao = (a, b) => a - b // Quando não temos a chave, a funcao so terá 1 linha. 
console.log (subtracao(5, 3))


const imprimir = a => console.log (a)
imprimir("LEGAL!!!")
