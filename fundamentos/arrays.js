const valores = [7.7, 8.9, 6.3, 0.2]
console.log (valores[0], valores[3])
console.log (valores[4])


valores[4] = 10
console.log (valores)

valores[10] = 5,0
console.log (valores)
console.log (valores.length)

valores.push({id:3}, false,  null, 'teste') // Push Adiciona novos valores a um array
console.log (valores)

/*********************************************************************/
/*
* NÃO É BOA PRÁTICA TER VALORES DE TIPOS DIFERENTES DENTRO DE UM ARRAY
*
/*********************************************************************/

valores.pop() // Retira o ultimo valor do array
console.log (valores)

delete valores[0] // Deleta valor do array de acordo com o índice passado. O índice continuará existindo, mas o valor dele será apagado.
console.log (valores)

console.log (typeof valores) // Array em Javascript é do tipo object