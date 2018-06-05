//  Cadeia de prototipos (prototype chain)

// Nivel mais alto de protótipo. Todos os objs possuirão attr0.
Object.prototype.attr0 = 'Z' // Não é recomendavel add attr a prototype.

const avo = { attr1: 'A' }

// Declarando que o proto do pai é o avo. Isso faz com que pai herde todos os attr do avo.
const pai = {__proto__: avo, attr2: 'B', attr3: '0'}

// Filho herde de pai, que por sua vez herde de avo.
const filho = { __proto__: pai, attr3: 'C' }


console.log(filho.attr0)
console.log(filho.attr1)
console.log(filho.attr2)

// Como attr3 foi sobescrito dentro de filho. Pega attr3 de filho. Isso é chamado de Shadowing (sombreamento).
console.log(filho.attr3)


const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324 // Shadowing
}

const volvo = {
    modelo: "V40",
    status() {
        // super referencia ao prototipo. Neste caso esta referenciando a funcao status do pai.
        return `${this.modelo}: ${super.status()}`
    }
}

// Estabelecendo relacao de herenca. Ferrari passa a ser filho de carro. Equivalente a ferrari.__proto__ = carro.
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

// Ao chamar o console.log, só mostra os attr/funcoes que foram declaradas dentro do objeto ferrari
console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())