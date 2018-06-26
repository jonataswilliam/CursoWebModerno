const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj))

// ES 8 Object.values/Object.entries
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação literal
const nome = "Carlos"
const pessoa = {
    nome,
    ola() {
        console.log(`Ola ${this.nome}`)
    }
}

pessoa.ola()

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return "Au au!"
    }
}

console.log(new Cachorro().falar())