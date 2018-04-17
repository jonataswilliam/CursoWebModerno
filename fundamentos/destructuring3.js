// Usando Destructuring com função

function rand ({min = 0, max = 1000}) { // Já retira o valor MIN e MAX do objeto passado.
    const valor = Math.random() * (max - min) + min // Calcula para que o numero fique dentro do range especificado
    return Math.floor(valor)
}

const obj = {max: 50, min: 4}
console.log(rand(obj))
console.log(rand({ min: 995}))
console.log(rand({}))
// console.log(rand()) // Erro pois não há como usar destructuring de algo indefinido
