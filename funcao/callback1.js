// Ideia do Principal do CallBack
// Passa uma funcao para outra funcao que será chamada quando um evento específico ocorrer.
const fabricantes = ['Mercedez', 'Audi', 'BWM']

function imprimir (nome, indice) {
console.log(`${indice +1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante)) // fabricante = cada elemento do array
