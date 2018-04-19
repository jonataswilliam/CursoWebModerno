// 
const valor = 'Global'

function minhaFuncao () { // Contexto Lexico em que a funcao está sendo declarada é este arquivo. No node seria neste módulo.
    console.log(valor) // Imprimira 'Global', pois como não temos valor declarada dentro da funcao, será procurada no escopo maior do que a funcao em que estamos.
}

