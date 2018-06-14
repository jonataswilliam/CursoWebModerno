// Fora de uma funcao o this aponta para Exports
console.log(this === global) // false
console.log(this === module) // false
console.log(this === module.exports) // true
console.log(this === exports) // true

// Dentro não. Dentro ele apontara para global
function logThis() {
    console.log("Dentro de uma funcao...")
    console.log(this === exports)
    console.log(this === module.exports)
    
    // Fazendo isso. Estamos colocando dentro do escopo global
    this.perigo = '...'
    
}

logThis()

// Retorna Undefined, porque perigo foi declarado no this dentro de uma funcao
console.log(this.perigo)
console.log(perigo)
console.log(global.perigo)