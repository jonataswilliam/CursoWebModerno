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