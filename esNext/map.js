// Estrutura parecida com o Objeto que contém uma chave e valor.
// A grande diferença entre o MAP e o Objeto é que no objeto a chave sempre será um literal/"string".
// já no MAP a chave pode ser uma função, um objeto, um numero. Dando maior flexibilidade no criação de chaves. Não substitui o objeto, mas pode ser interessante em algumas explicações.

const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

// Não funciona se chamarmos dessa forma
console.log(tecnologias.react)
// Forma correta de chamar
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])

chavesVariadas.forEach((vlr, ch) => {
    console.log(ch, vlr)
})

// Has verifica se o elemento existe ou não dentro do MAP
console.log(chavesVariadas.has(123))

// Deleta um elemento dentro do MAP. Retorna true ou false. 
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)


// Não permite repetição de chave. O que ele faz é sobescrever o valor 
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)
    