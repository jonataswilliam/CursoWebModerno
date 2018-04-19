// Funcao Factory com parâmetros.
function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto : 0.1,
        valorComDesconto : preco * 0.99,
        calculaImposto () {
            return this.valorComDesconto * 1.10
        }
    }
}


const iPad = criarProduto('iPad', 3000)
const PC = criarProduto('Computador', 6000)
const caneta = criarProduto ('CanetaX', 5)

console.log(iPad)
console.log(PC)
console.log(caneta)
console.log(caneta.calculaImposto())
