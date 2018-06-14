require("./global")
console.log(minhaApp.saudacao())
console.log(global.minhaApp.saudacao())

// Se nao dermos um freeze na hora de criarmos o objeto poderemos alterar ele a qualquer momento, o que não é o ideal.
minhaApp.nome = "Eita"
console.log(minhaApp.nome)