const filhas = ["Ana", "Bia"]
const filhos = ["João", "Rafael"]

const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos)

console.log([].concat(filhos, filhas, "Felipe", "Maria"))

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
console.log(["a", "b"].concat([1, 2], [3, 4], 5, [[6, 7]]))