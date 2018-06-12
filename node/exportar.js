console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

// Tanto this quanto exports são uma referencia pra module.exports. Uma fez referenciado o objeto, nao adianta muda-los pois o module.exports nao mudará.
exports = null
console.log(module.exports)

// Caso precisar mudar, mudamos diretamente o module.exports
module.exports = { produto: "iPAd"}
console.log(module.exports)
