class lancamento {
	constructor(nome = "Generico", valor = 0) {
		this.nome = nome,
		this.valor = valor
	}
}

class cicloFinanceiro {
	constructor(ano, mes) {
		this.ano = ano,
		this.mes = mes,
		this.lancamentos = []
	}

	// Formas de aceitar numeros de argumentos variaveis
	addLancamentos(...lancamentos) {
		lancamentos.forEach(l => this.lancamentos.push(l))
	}

	sumario() {
		let valorConsolidado = 0
		this.lancamentos.forEach(l => {
			valorConsolidado += l.valor
		})
		return valorConsolidado
	}
}

const salario = new lancamento('Salario', 45000)
const contaLuz = new lancamento('Luz', -220)

const contas = new cicloFinanceiro(2018, 6)
contas.addLancamentos(salario, contaLuz)

console.log(contas.sumario())