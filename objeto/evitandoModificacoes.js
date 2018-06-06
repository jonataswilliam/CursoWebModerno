// Object.preventExtensions // Não permite que sejam criados novos atributos no objeto. Permite excluir mas não add.
const produto = Object.preventExtensions({
    nome: "Qualque", preco: 1.99, tag: 'promoção'
})
// Verifica se o objeto permite add extensoes(criar novos attr) ou não.
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = "Borracha escolar branca"
delete produto.tag

console.log(produto)

// Object.seal() // Sela o objeto não deixando add novos attr e não permite excluir os attr que o objeto já possui. Permite que alteracao nos atributos sejam feitas.
const pessoa = {
	nome: 'Juliana',
	idade: 35
}

Object.seal(pessoa)
// Verifica se o objeto pessoa é selado ou não
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


// Object.freeze() // Congela o objeto não deixando add ou excluir attr. Não permite alterar os valores dos attr tbm(passa todos os attr para writables = false).
Object.freeze(pessoa)
pessoa.idade = 45