// Desafio Simular um ForEach

// Fazendo com que forEach2 seja parte das funcoes de Array
// Dizendo que forEach2 é uma funcao que recebera uma funcao como parametro(callback)
// Para cada elemento percorrido a funcao passada será chamada.
Array.prototype.forEach2 = function (callback) {
    for(let i=0; i< this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ["Ana", "Bia", "Rafael"]

aprovados.forEach2(function(valor, indice, array) {
    console.log(`${indice+1}) ${valor}`)
    console.log(array)
})
