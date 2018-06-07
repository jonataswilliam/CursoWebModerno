const nums = [1, 2, 3, 4, 5]

// Map é um For com propósito. Faz uma tranformação nos elementos de um array e armazena em um array novo.
// Map recebe uma funcao como parametro que possue 3 parametros
// 1- O valor do elemento da vez. 2- indice, 3- Array de origem.
let resultado = nums.map(function(elemento) {
    return elemento * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// Chamando Maps Encadeados
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)