// Porta é um processo dentro de um computador.
// É através dela que outro computador consegue se comunicar com uma aplicação específica

const porta = 3003
const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    console.log("Middleware1")
    next()
    
})

app.get('/produtos', (req, res, next) => {
    res.send({nome: "Notebook", preco: 123.45}) // Irá ser convertido para JSON automaticamente pela funcao send
    
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta: ${porta}`)
})