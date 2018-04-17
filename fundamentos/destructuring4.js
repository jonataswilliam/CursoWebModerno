function rand ([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // Inverte se op valor de min for maior que max
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log (rand([40 , 30]))
console.log (rand([20 , 30]))
console.log (rand([, 10]))
console.log (rand([]))
// console.log (rand()) // Erro pois não há como usar destructuring de algo indefinido