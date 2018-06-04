// Formas de criar um objeto
const produto = new Object
produto.nome = "Cadeira"
produto["Marca do Produto"] = "Qualquer"
produto.preco = 220.00

console.log(produto)
delete produto.nome
delete produto["Marca do Produto"]
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,   
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: "Junior",
        idade: 19
    }, {
        nome: "Ana",
        idade: 42
    }]
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(caroo)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)