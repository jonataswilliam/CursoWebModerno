let comparaComThis = function (param) {
    console.log (this === param)
}

// True
comparaComThis(global)

let obj = {}

comparaComThis = comparaComThis.bind(obj)


comparaComThis(global) // False pois usando bind deixamos this sempre referênciado a obj.
comparaComThis(obj) // True



let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // False. Utilizando ArrowFunction o contexto Léxico é o módulo ou onde a funcao foi declarada e não quando ou onde foi chamada. No caso do uso de Node, a funcao será declarada dentro do escopo do módulo e não global.

// Isso...
comparaComThisArrow(module.exports) // True
// ...É igual a isso.
comparaComThisArrow(this) // True


comparaComThisArrow = comparaComThisArrow.bind(obj) // Continua sendo false, pois a ArrowFunction não permite que o this seja mudado nem mesmo utilizando o bind.
comparaComThisArrow(obj)

comparaComThisArrow(module.exports) // This continua apontando o modulo ou local onde foi declarado


// O THIS DENTRO DE UMA FUNCAO ARROW É ASSOCIOADO AO CONTEXTO EM QUE A FUNCAO FOI ESCRITA. NÂO TEM VARIACAO. NEM MESMO UTILIZANDO O BIND

// ALEM DE TERMOS A FUNCAO DE FORMA REDUZIDA, O THIS SEMPRE SERÁ O MESMO E NÂO VARIA. 