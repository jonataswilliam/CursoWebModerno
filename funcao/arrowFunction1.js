// Arrow function sempre é uma funcao anônima, se quisermos utilizá-la novamente devemos armazena-la em um variável

// Forma tradicional
let dobro = function (a) {
    return a * 2
}


// Forma 1 Arrow com declaracao de retorno
dobro = (a) => {
    return a * 2
}

// Forma 2. Forma reduzida. Podemos tirar os parenteses quando só teremos 1 parametro na função e não utilizamos returna. É muito utilizado para funcoes de uma única linha.
dobro = a => a * 2 //Retorno implícito

// Com o uso de Arrow Functions temos a ideia de sempre utilizarmos funcoes menores e específicas.

console.log(dobro(Math.PI))

// Outro exemplo
let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'