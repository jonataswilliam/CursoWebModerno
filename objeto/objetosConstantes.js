// Pessoa aponta para um endereço de memória. Por exemplo => 123; O objeto criado fica armazenado no endereço de memória e o que fica armazenado na const é o endereco de memória desse objeto.
const pessoa = {
    nome: "João"
}

// Fazendo isso, não está sendo mudado a referencia da CONST e sim o conteudo que está dentro do endereco de memoria. Ou seja, o endereco continua sendo o mesmo.
pessoa.nome = "Pedro"
console.log(pessoa)

// Pessoa irá receber um novo objeto, e este objeto está em outro endereço. Por exemplo 456.
// Isso dará pau. Pois, pessoa é uma const, e não poderá alterar a referencia de memória passada no momento da criação
// pessoa = { nome: "Ana" }


// Congela o objeto passado no parametro. Uma vez congelado, o objeto não poderá receber alteração. O objeto se tornará constante
Object.freeze(pessoa)

pessoa.nome = "Maria"
// O nome continuará sendo PEDRO.
console.log(pessoa.nome)

pessoa.end = "Rua ABC"
// Não atribuirá o novo atributo pois o objeto está congelado
console.log(pessoa)

delete pessoa.nome
// Não deletará o atributo nome pois o objeto está congelado
console.log(pessoa)


// Forma de criar um objeto já congelado (constante)
const pessoaConstante = Object.freeze({nome: "João"})
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)