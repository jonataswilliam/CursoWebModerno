// ES2015 (EC6)
const pessoa = {
    nome: 'Adel',
    idade: 40,
    filhos: {
        filha1: 'Rapha'
    }
}

// Para usarmos o Destructuring em Objetos usamos o operador '{}'. 

const { nome, idade } = pessoa // Pega os valores dentro do OBJ pessoa já criando as variáveis nome e idade
const { nome: n, idade: i} = pessoa // Pega os valores de nome e idade dentro do OBJ pessoa já criando as variáveis n e i
const { filhos: { filha1 } } = pessoa // Pega os valores dentro do OBJ pessoa já criando as variáveis filha1
console.log (n, i, filha1)

// Temos que tomar cuidado ao tentar pegar valores de objetos aninhados, pois para entrar dentro de um atributo aninhado ele deve existir, caso contrário dará erro.
// Exemplo
const { aninhamentNaoDeclarado: { aninhamento } } = pessoa // Pega os valores dentro do OBJ pessoa já criando as variáveis filha1
console.log (aninhamento)
