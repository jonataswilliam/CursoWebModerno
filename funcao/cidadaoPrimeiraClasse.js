// FUNCAO EM JS É FIRST-CLASS OBJECT (CITIZENS)
// Higher-order function

// Esses nomes acima são utilizados quando a linguagem trata funções como um tipo de dado abrindo um leque de opções

// Criação de forma literal
function fun1() { //Pode ou não ter argumentos e retorno    
    // Se não tiver return algumaCoisa, retorna UNDEFINED.
}

// Armazenar em uma Variável
const fun2 = function () {} // Armazenando Função Anonima 

// Armazenar em um array
const array = [function (a, b) {return a - b}, fun1, fun2]
console.log(array[0](2, 4))

// Armazenar em atributo de um objeto
const obj = {}
obj.falar = function (nome) { return `Ola ${nome}`}
console.log (obj.falar("Itala"))

// Passar funcão como param
function run(fun) {
    fun() // Se fun nao for uma funcao dara erro...é interessante verificar se o parametro é funcao antes de invocar.    
}

run(function () { console.log("Executando...") })

// Uma funcao pode retornar/conter uma funçao
function soma (a, b) {
    return function (c) {
        console.log (a + b + c)
    }
}
soma(2, 3)(4)
const cincoMais = soma (2, 3)
cincoMais(4)