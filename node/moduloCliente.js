// Forma de Importar CommonsJS
// Usamos ./ pois o modulo está dentro do nosso sistema. Por esse motivo usamos o caminho relativo.
const moduloA = require("./moduloA")
const moduloB = require("./moduloB")

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)
