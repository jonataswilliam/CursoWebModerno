const pai = { nome: "Pedro" , corCabelo: "Preto" }

// Cria o objeto já referenciando o pai passado no argumento da funcao.
const filha1 = Object.create(pai)
filha1.nome = 'Ana'

console.log(filha1.corCabelo)

// Criando objeto que herda de pai e declarando novos atributos
const filha2 = Object.create(pai, {
    // Valor de nome será BIA. WRITABLE = false faz com que o attr seja congelado. ENUMERABLE permite ou nao ser listado na funcao object.keys ou em um forIn por exemplo.
    nome: { value: "Bia", writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem o cabelo ${filha2.corCabelo}.`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    // Mostrará nome e corCabelo
    console.log(key)
    
    // Verifica se os attr é dele mesmo ou herdado
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por heranca ${key}`)
}