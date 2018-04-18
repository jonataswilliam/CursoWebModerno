function Pessoa () {
    this.idade = 0
    
    setInterval( () => {
        // this dentro da arrowFunction não varia, sempre respeita o momento em que a funcao foi declarada. (Contexto Lexico)
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa