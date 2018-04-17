// Função nada mais é do que um BLOCO de Código em que demos um nome para ELE. Blocos de código em JAVASCRIT são marcados por { }.

//Funcao sem retorno
function imprimirSoma (a, b) {
    console.log (a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Quando se passa apenas um valor em uma funcão com mais parametros, os demais ficam como "UNDEFINED". Somando o resultado será NaN.
imprimirSoma(2, 3, 4 ,5 ,3, 5, 8) // Quando mais parametros do que definida na função for passado, ele pegará a qtd que foi definida e ignorará o restante.
imprimirSoma()


// Funcao com retorno
function soma (a, b = 0) { // No novo padrão do ECMASCRIPT, pode-se definir um valor padrão para os parâmentros na declaração da função.
    return a + b;
}

console.log (soma(2, 3))
console.log (soma(2))