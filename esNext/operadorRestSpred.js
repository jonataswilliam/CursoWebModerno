// Quando queremos juntar os parametros em uma unica estrutura (tipo um array) os ... é chamada de rest
function total(...numeros) {
    const total = 0
     numeros.forEach(n=> total += n)
     return total
}

console.log(total(2, 3, 4, 5))
// Quando queremos espalhar todos os atributos de um objeto em outro, por exemplo, os ... é chamado de spread
// Usando Spread com objeto
const funcionario = {nome: "Maria", salario: 1250.99}
const clone = {ativo: true, ...funcionario}

console.log(clone)

// usando spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
