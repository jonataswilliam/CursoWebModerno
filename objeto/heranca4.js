function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

// Os objetos criados por uma funcao contrutora apontarão para o mesmo prototype
console.log(obj1.__proto__ === obj2.__proto__)

// Quando criamos um objeto a partir de uma funcao construtora aponta para a funcaoCriada.protype
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = "Antonio"
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = "Obj3"
obj3.falar()


// Resumo...Verdades..
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

