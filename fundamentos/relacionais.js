console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', '3' < 2)
console.log('06)', '3' > 2)
console.log('07)', '3' <= 2)
console.log('08)', '3' >= 2)

const d1 = new Date(0) // 1 Janeiro 1970. Data de referência zero do JAVASCRIPT // Passando endereco de memoria
const d2 = new Date(0) 

console.log('09)', d1 === d2) // Não faz diferenca usar == ou === quando usamos endereço de memoria. SEMPRE DARÁ COMO FALSO
console.log('10)', d1 == d2)  // Não faz diferenca usar == ou === quando usamos endereço de memoria. SEMPRE DARÁ COMO FALSO
console.log('11)', d1.getTime() == d2.getTime())  // Verdadeiro pois com getTime teremos um NUMBER

console.log('12)', undefined == null)  // Verdadeiro 
console.log('12)', undefined === null) // Falso

