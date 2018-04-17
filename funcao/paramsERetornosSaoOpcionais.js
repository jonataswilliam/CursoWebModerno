function area(largura, altura) {
    const area = largura * altura
    if( area > 20) {
        console.log (`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

// Apenas para exemplo. Não é uma função legal na prática;

console.log(area(2, 2));
console.log(area(2))
console.log(area())
console.log(area(2, 3, 5, 533, 332))
console.log(area(5, 5))