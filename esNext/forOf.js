// A diferenca entre ele e o ForIn é que o For In Itera em cima das chaves
for (let letra in 'Coder') {
    console.log(letra)
}
// já no For Of a Iteração é feita em cima dos valores.
for (let letra of 'Jonatas') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map', {abordado: true}]
    ['Set', {abordado: true}]
    ['Promise', {abordado: false}]
])

for (let assunto of assuntoMap) {
    console.log(assunto)
}

// Pegando somente as chaves do map
for (let chaves of assuntoMap.keys()) {
    console.log(chaves)
}

// Pegando somente os valores do map
for (let valores of assuntoMap.values()) {
    console.log(valores)
}

// usando destructuring para já quebrar as entradas de assuntoMap em chave(ch) e valor(vlr)
for ( let [ch, vlr] of assuntoMap.entries()) {
    console.log(ch, vlr)
}



const s = new Set(['a', 'b', 'c'])

for (let letra of s) {
    console.log(letra)
}