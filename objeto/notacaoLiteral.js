const a = 1;
const b = 2;
const c = 3;

// Antes do ECMASCRIPT 2015 era necessário passar a chave e o valor do objeto mesmo que a variavel contendo o valor fosse o mesmo nome da chave.
const obj1 = { a:a, b:b, c:c }

// Depois...a já receberá a automaticamente.
const obj2 = {a, b, c }

console.log(obj1, obj2)


const nomeAttr = "Nota"
const valorAttr = 7.87
const obj3[nomeAttr] = valorAttr
console.log(obj3)

// Pegará o valor que está dentro de nomeAttr e passará a ser o nome do atributo no objeto.
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

