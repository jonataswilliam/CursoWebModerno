// ES2015 (EC6)
// Para usarmos o Destructuring em Objetos usamos o operador '{}'.

// Prestar atenção na diferença entre declarar um Array...
const declarandoArray = [1, 2, 3]

// Extrutura de destructuring
const [a, b, c] = ['10', 7, 9] // Cria Variáveis ja pegando os valores do do array.
console.log (a, b, c)

const [, [,nota]] = [[, 8, 8], [9, 6,8]] // Não recomendável pela dificuldade de leitura
console.log(nota)
