// Porta é um processo dentro de um computador.
// É através dela que outro computador consegue se comunicar com uma aplicação específica

const porta = 3003
const express = require('express')
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')
const app = express()

// app.get('/produtos', (req, res, next) => {
//     console.log("Middleware1")
//     next()
    
// })

// app.get('/produtos', (req, res, next) => {
//     res.send({nome: "Notebook", preco: 123.45}) // Irá ser convertido para JSON automaticamente pela funcao send
    
// })

// Retorna uma funcao middleware encodando todo o corpo da requisicao. Extended: true é para evitar um warning dizendo que esta depreciado.
// Utilizando o use ele apricara essa funcao a todos as requisicoes efetuados no servidor.
app.use(bodyParser.urlencoded( { extended: true} ))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

// '/:id é passando o parametro Id na url. Na Url sera passado o numero do ID e guardaremos dentro do parametro ID.
app.get('/produtos/:id', (req, res, next) => {
    // Os parametros passados na URL ficam dentro de req.params
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto) // Converte automaticamente para JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta: ${porta}`)
})