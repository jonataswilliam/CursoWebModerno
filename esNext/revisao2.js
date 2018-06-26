// Arrow Function - Sempre será sempre anônima. Se colocar o corpo da funcao usando {} é necessário colocar um return
const soma = (a, b) => a * b
console.log(soma(2, 3))

// Arrow Function (this) - This sempre será 
const lexico = () => console.log(this === exports)
const lexico2 = () => lexico.bind({})

lexico()
lexico2()


// Parametros Default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log("Ola")


// Operador rest/spred
function total(...numeros) {
    const total = 0
     numeros.forEach(n=> total += n)
     return total
}

console.log(total(2, 3, 4, 5))
