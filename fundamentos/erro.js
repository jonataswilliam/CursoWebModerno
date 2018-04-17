// Utilizando Try/Catch/Throw
function tratarErroELancar (erro) {
    // throw new Error('...') // Lancará uma mensagem de erro no console. 
    // throw 10 // Lancara o valor 10 no console.
    // Mais exemplos do que pode ser lancado
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}



function imprimirNomeGritando (obj) {
    try { // TRY é um bloco de código que julgamos poder dar um erro. Ele tentará executar isso
        console.log (obj.name.toLocaleUpperCase() + '!!!')
    } catch (e) { // Se gerar algum erro no try, automaticamente ele cairá no catch. E = erro que aconteceu
        tratarErroELancar (e)
    } finally { // Esse bloco será chamado semrpe que termina as tratativas, independentemente se der erro ou não.
        console.log ("Final")
    }
    
}

const obj = {
    nome : "Roberto"
}

imprimirNomeGritando(obj)