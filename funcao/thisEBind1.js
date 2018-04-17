const pessoa = {
    saudacao : "Bom dia",
    // Forma nova de criar funcao dentro de objeto não sendo necessario funcao: ...
    falar() {
        console.log(this.saudacao) //THIS é referênciado do objeto pessoa. Sem o this dará erro. Colocando o this, a funcao irá buscar a saudacao dentro do escopo do objeto.
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Retornará UNDEFINED. Conflito entre o paradigma funcional e o OO
// AO PASSARMOS PESSOA.FALAR PARA A FUNCAO FALAR FIZEMOS O MESMO QUE FALAR = CONSOLE.LOG (THIS.SAUDACAO). PORÉM SAUDACAO NAO EXISTE NESSE CONTEXTO. SAUDACAO ESTA DENTRO DO CONTEXTO PESSOA
// DESSA FORMA NAO ESTAMOS INVOCANDO A FUNCAO FALAR DE DENTRO DO CONTEXTO PESSOA E SIM DO CONTEXTO GLOBAL.


// PARA RESOLVERMOS ISSO PODEMOS UTILIZAR O .BIND
const falarDePessoa = pessoa.falar.bind(pessoa) //O bind irá amarrar o this ao objeto pessoa. Ele é encarregado de referenciar sempre o this ao contexto que foi passado entre ().
falarDePessoa()
