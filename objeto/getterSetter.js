const sequencia = {
    // Por _ no nome da variável é uma convençao para variaveis privadas.
    _valor: 1,
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor) {
            this._valor = valor
        }
    }
    // Somente nesta situação utilizando get e set, javascript aceita funcoes com nomes iguais. (Conhecido como sobrecarga de funcao, quando uma funcao é declarada varias vezes com parametros diferentes)
}


// Ao chamar o attr valor o javascript entende que estamos chamando o método get.
console.log(sequencia.valor, sequencia.valor)

// O javascript tambem chama o metodo set quando queremos atribuir um valor
sequencia.valor = 1000
console.log(sequencia.valor, sequencia._valor)

