const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 3.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

//Simulando o funcionamento do MAP
Array.prototype.map2 = function (callback) {
    const newArray = []
    
    for(let i=0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    
    return newArray
}

const paraObj = json => JSON.parse(json)
const pegaPreco = produto => produto.preco


let precos = carrinho.map2(paraObj).map2(pegaPreco)
console.log(precos)