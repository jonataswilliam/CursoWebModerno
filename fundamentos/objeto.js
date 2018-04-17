// Objeto em JS é uma coleção de CHAVES x VALOR. 

// Forma 1 para criação de Objeto
const prod1 = {} // Forma literal de criar um objeto
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço

console.log (prod1)


// Forma 2 para criação de Objeto
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: '',
        obj: {
            
        }
    }
}
console.log (prod2)

// Objeto é diferente de JSON. JSON é um formato TEXTUAL. Portanto, JSON contem apenas TEXTo. Objeto sim é uma coleção de chave x valor que contém atributos, comportamentes, etc.
// Como ficaria prod2 se fosse JSON
'{"nome": "Camisa Polo", "preco": 79.90}'

