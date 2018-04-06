// Estratégia 1 para gerar valor padrao.
function soma1(a, b, c) {
    a = a || 1 //Se a for qualquer tipo de dado que dará false em uma comparação o valor após || é atribuído
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log (soma1(), soma1(4), soma1(1, 2, 3), soma1(0, 0, 0))
// Passando o valor 0 dará um bug nessa estratégia pois zero é interpretado como false.


// Estratégia 2, 3 e 4 para gerar valor padrao.
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // 2 estrategia
    b = 1 in arguments ? b : 1  // 3 estrategia. Verifica se existe um argumento em arguments[1]
    c = isNaN(c) ? 1 : c        // 4 estratégia. Verifica se o que foi passado é um numero ou nao. Essa seria a melhor estratégia para realizar a soma
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// VALOR PADRAO DO ECMASCRIPT 2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))