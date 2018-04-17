let isAtivo = false
console.log (isAtivo)

isAtivo = true
console.log (isAtivo)

isAtivo = 1
console.log (!!isAtivo) // Faz a verificacao se o 1 é entendido como verdadeiro ou falso
console.log (!isAtivo) // Faz a verificacao se o 1 é entendido como verdadeiro ou falso

console.log ('Os verdadeiros...')
console.log (!!3)
console.log (!!-1) // Todos os numeros inteiros são verdadeiros com excessão do 0.
console.log (!!' ') // Espaço vazio
console.log (!![])
console.log (!!{})
console.log (!!Infinity)
console.log (!!(isAtivo = true)) // Não significa se o resultado deu certo e sim se o que está sendo atribuído a variável é verdadeiro ou falso.


console.log ('Os falsos...')
console.log (!!0)
console.log (!!'') // String vazia
console.log (!!null)
console.log (!!NaN)
console.log (!!undefined)
console.log (!!(isAtivo = false)) // Não significa se o resultado deu certo e sim se o que está sendo atribuído a variável é verdadeiro ou false.


console.log ("Para finalizar...")
console.log (('' || null || 0 || 'epa' || 123)) // Retorna o primeiro valor vdd que encontrar. Precisa estar dentro de ()


console.log ("Aplicação prática...")

let nome = ''
console.log ((nome || "Desconhecido")) // Se dentro de nome estiver algo interpretado como vazio, ele retornará o primeiro valor verdadeiro que encontrar.