const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 3.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

// Desafio: Retorar um Arry contendo apenas os precos.
const paraObj = json => JSON.parse(json)
const pegaPreco = produto => produto.preco


let precos = carrinho.map(paraObj).map(pegaPreco)
console.log(precos)