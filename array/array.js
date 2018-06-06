// Não existe Array Nativo em JS. Array em js é um Objeto.
console.log(typeof Array, typeof new Array, typeof [])

// Boas praticas pedem que os dados dentro de um Array sejam homogeneos(todos do mesmo tipo).



let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) // Bia
console.log(aprovados[1]) // Carlos
console.log(aprovados[2]) // Ana
console.log(aprovados[3]) // Undefined


aprovados[3] = 'Paulo'

// Add novo elemento no final de um arry. Melhor forma de add elementos de uma array
aprovados.push('Abia')
console.log(aprovados.length)

// Add um elemento na posicao 9 do array. As posicoes 5, 6, 7 e 8 passarao a existir como Undefined.
aprovados[9] = "Rafael"
console.log(aprovados.length)
console.log(aprovados[7] === undefined) // True
console.log(aprovados[7] === null) // False
console.log(aprovados)

// A funcao Sort ordena o Array. Causa alteração no próprio Array. Ele passará todos os elementos vazios para o final do array
aprovados.sort()
console.log(aprovados)

// Deleta a posicao do array mas não reordena. A posicao passa a ser UNDEFINED
delete aprovados[1]
console.log(aprovados)


aprovados = ['Bia', 'Carlos', 'Ana']			
// Splice serve para add elementos em um determinado indice, remover elementos do array, e remover e add ao mesmo tempo.
// Primeiro parametro é o indice onde queremos trabalhar
// O segundo representa a qtd de quantos elementos a partir do primeiro parametro iremos exlcuir.
// Terceiro em diante add elementos depois do indice passado no primeiro parametro
// Se passarmos 0 no segundo parametro nenhum elemento será removido
aprovados.splice(1, 1, 'elemento1', 'elemento2')
console.log(aprovados)