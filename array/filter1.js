const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

console.log(produtos.filter(function (p) {
    // Dentro da funcoa de callback de filter é necessário passar uma condicao. Se o retorno do teste do elemento for verdadeiro ele irá será passado para o novo Array, caso contrário ele será descartado.
    // Se colocarmos return false, por exemplo, todos os elemetos serão descartados
    
    // Só passsarao produtos que contenham o preco maior que 2500
    // return p.preco > 2500
    return p.preco > 1500
    
}).filter(function (p2) {
    return p2.fragil
}))

//  Simplificando com ArrowFuntions
const caro = produto => produto.preco >= 2500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))