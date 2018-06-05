const ferrari = {
    modelo: "F40",
    velocidade: 324
}

const volvo = {
    modelo: 'V40',
    velocidade: 200
}

// __proto__ é a forma de acessar o objeto pai
console.log(ferrari.__proto__)

// Objetct.prototype é o mais alto nivel de prototipo. Seria como o pai de todos.
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

// null pois Object já é o mais alto nivel de prototype;
console.log(Object.__proto__ === Object.prototype)

// Toda funcao possui o attr prototype

function MeuObjeto() {
    console.log(typeof Object, typeof MeuObjeto)
    console.log(Object.prototype, MeuObjeto.prototype)
}