const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 3
}

// Pega as chaves do objeto pessoa e devolve em um array
console.log(Object.keys(pessoa))

// Pega os valores do objeto pessoa e devolve em um array
console.log(Object.values(pessoa))

// Devolve um array com a chave e valor como arrays. [['nome', 'rebeca'], ['idade', 2], ['peso', 3]]
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})


// Utilizando destructuring
Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

// Permite definir uma nova propriedade para o objeto definindo informações sobre ela. Se vai ser poder ser editavel ou não, visivel, etc.
// O primeiro argumento é o objeto em que será criada a nova propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2018'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Object.assign() ECMS 2015
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}

// Pega os attr dos objtos passados, concatena e coloca todos eles no novo obj sendo criado. Os valores dos attr sao sobrescritos caso se repitam
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
