// Set é uma estrutura de conjunto não indexado que não aceita repetição
const times = new Set()
// Add elemento
times.add('Vasco')
// Add de forma encadead
times.add('São Paulo').add('Palmeiras').add('Santos')

// Será ignorado, pois Vasco já existe
times.add('Vasco')

console.log(times)
console.log(times.size)

//Has verifica se o elemento existe dentro de times. É caseSensitive
console.log(times.has('vasco')) 
console.log(times.has('Vasco'))

times.delete('Palmeiras')
console.log(times)

// Criando um set através de um array.
const nomes = ['João', 'Pedro', 'Ana', 'Maria', 'João']
const nomesSet = new Set(nomes)
console.log(nomesSet)