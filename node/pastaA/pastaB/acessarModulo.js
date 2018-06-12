// Obs. Se o nome do arquivo contiver letra maiusculas e na hora de fazermos o require colocarmos com letras minusculas funcionará no Windowa e Mac, mas não funcionará no Linux
const moduloA = require('../../moduloA')
console.log(moduloA)

const c = require("./pastaC")
console.log(c)

