// Se o objeto module.exports ja tiver sido criado ele sempre retorna a mesma instancia
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// Para criar novas instancias usamos uma factory para isso.
// () para invocar a funcao factory dentro de InstanciaNova
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

// A e B importarao a mesma referencia
console.log(contadorA)
console.log(contadorB)

// C e D sao referencias independentes
console.log(contadorC)
console.log(contadorD)