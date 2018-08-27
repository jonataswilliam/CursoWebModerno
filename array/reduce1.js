const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.nota))


const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) // O segundo valor, se informado na chamado do reduce, será o valor inicial do acumulador. Neste exemplo, estamos iniciando com valor 0.

console.log(resultado)

// Exemplo simples
const nums = [1, 2, 3, 4, 5]

const numResult = nums.reduce(function (acumulador, atual) {
    return acumulador * atual
})
console.log(numResult)

// Com arraow function 
const numResult2 = nums.reduce((acumulador, atual) => acumulador * atual)
console.log(numResult2)