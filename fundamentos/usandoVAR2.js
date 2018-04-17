// FUJA DO ESCOPO GLOBAL


var numero = 1
{
    var numero = 2
    console.log ("Dentro = ", numero)
}

console.log ("Fora = ", numero)
// O VAR não respeita qualquer tipo de bloco, somente funcao. Pontanto núemro será sobescrito dentro do bloco