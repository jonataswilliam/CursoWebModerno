function Pessoa () {
    this.idade = 0

    /*
    setInterval(function () {
        this.idade++
        console.log(this.idade) //Se nao passarmos o .bind, This tem como referencia o setInterval que é quem chama a funcao anonima passada a que x segundos.
    }.bind(this), 1000)
    */

    // Ou podemos fazer. Porém a opcao primeira é melhor prática.
    const self = this
    setInterval(function () {
        this.idade++
        console.log(self.idade) //Se nao passarmos o .bind, This tem como referencia o setInterval que é quem chama a funcao anonima passada a que x segundos.
    }, 1000)
}

new Pessoa
