const alunos = [
	{nome: "João", nota: 7.9},
	{nome: "Maria", nota: 9.2},
]

// Imperativo
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
	total += alunos[i].nota
}
console.log(total1 / alunos.length)


// Declarativa
const getNota = alunos.map(aluno => aluno.nota)
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// A diferenca entre imperativo e declarativo
// No Imperativo é passado o passo a passo do que fazer. O foco é como tem que ser feito.
// No Declarativo é passado o que tem que ser feito e as funcoes internas fazem. O foco é o que tem que ser feita.

