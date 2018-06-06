const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}

// Transforma um objeto em JSON. A funcao soma foi excluida por JSON se tratar de um formato de dados. Não permitindo nada que seja executavel.
console.log(JSON.stringify(obj))

// Transforma JSON em um Objeto. Somente transformará se o formato passado for válido. Todos os nomes dos attr devem ser delimitados por aspas duplas(").
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))

// Valores dos attr que são Strings devem ter aspas duplas
// Valores booleanos não precisam de aspas
// Valores que são objetos devem conter aspas duplas nos nomes dos attr internos
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e":[] }'))

// Exemplo JSON contendo obj.
console.log(JSON.parse('{ "nome": "Junior", "idade": 56, "legal": true, "filhos": [{ "nome": "Pedro", "idade": 19}, {"nome": "Bia", "idade": 15}]}'))