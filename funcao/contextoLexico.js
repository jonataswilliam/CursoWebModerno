// CONTEXTO LEXICO
var valor = 'Global'

function minhaFuncao () { // Contexto Lexico em que a funcao está sendo declarada é este arquivo. No node seria neste módulo.
    console.log(valor) // Imprimira 'Global', pois como não temos valor declarada dentro da funcao, será procurada no escopo maior do que a funcao em que estamos.
}

var valor = 'Banana'

function exec () {
    var valor = 'Local'
    console.log (valor) // Imprimira Local.
    minhaFuncao() // Imprimira 'Global', pois no momento em que a função foi declarada ela também armazena o momento em que ela foi declarada. Ela carrega o contexto em que ela foi declarada, mesmo que ela seja chamada bem longe do onde ela foi declarada. Mesmo sendo dentro de outra funcao.
}

exec()


//**** Tópicos Aula ******
// #A FUNCAO CARREGA CONSIGO O EXCOPO LEXICO EM QUE ELA FOI DECLARADA. O QUE ESTAVA ACONTECENDO QUANDO ELA FOI DEFINIDA E NÂO QUANDO ELA É CHAMADA
//