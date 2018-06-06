class Avo {
	constructor (sobrenome) {
		this.sobrenome = sobrenome
	}
}

// Pai herdando de Avo
class Pai extends Avo {
	constructor (sobrenome, profissao = "Professor") {
		// Instaciando a funcao construtora da classe pai (avo) dessa classe.
		super(sobrenome)
		this.profissao = profissao
	}
}

class Filho extends Pai {
	constructor () {
		super('Silva')
	}
}

const filho = new Filho
console.log(filho)