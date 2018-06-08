const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true},
]

// Desafio 1: Todos os alunos são bolsistas
let bolsistas1 = alunos.map(a => a.bolsista).reduce((resultado, atual) => resultado && atual)
console.log(bolsistas1)


// Desafio 2: Algum aluno é bolsista
let bolsistas2 = alunos.map(a => a.bolsista).reduce( (resultado, atual) => resultado || atual)
console.log(bolsistas2)


// Podemos colocar o map e o reduce dentro de variaveis
const mapBolsistas = (a => a.bolsista)
const todosBolsistas = (resultado, atual) => resultado && atual
const algumBolsista = (resultado, atual) => resultado || atual

bolsistas1 = alunos.map(mapBolsistas).reduce(todosBolsistas)
bolsistas2 = alunos.map(mapBolsistas).reduce(algumBolsista)

console.log(bolsistas1)
console.log(bolsistas2)

