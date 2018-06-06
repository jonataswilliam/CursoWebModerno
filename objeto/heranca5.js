// Por serem funcoes todos ele possuem o .prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// ADD nova funcao dentro da API String
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

// Por 'Jonatas' ser uma string ele irá buscar todas as funcoes declaradas dentro de string
console.log('Jonatas'.reverse())


Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())