/*
* v e v = v
* v e f = f
* f e ? = f
*
*
* v ou ? = v
* f ou v = v
* f ou f = f
*
* v xor v = f
* v xor f = v
* f xor f = v
* f xor f = f
*
* !v = f
* !f = v

*/

// OPERADORES CURTO-CIRCUITO

function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // Se usarmos o PIPE (|) somente uma vez, será feito a comparação bit a bit. Os valores são convertidos a binarios para fazer as comparação.
    const comprartv50 = trabalho1 && trabalho2
    // const comprartv32 = !! trabalho1 ^ trabalho2 // Operador bitwise xor
    const comprartv32 = trabalho1 != trabalho2 // Operador xor simulador por diferanca
    const manterSaldavel = !comprarSorvete
    
    // Isso...
    return { comprarSorvete, comprartv50, comprartv32, manterSaldavel } // ES2015. Declarando dessa forma, será criado um atributo com o nome da const com o valor dentro desta const.
    
    // ..É o mesmo que isso.
    /*
    return { 
            comprarSorvete: comprarSorvete,
            comprartv50: comprartv50,
            comprartv32: comprartv32,
            manterSaldavel: manterSaldavel
        } 
    */
    
    
}

console.log (compras(true, true))
console.log (compras(true, false))
console.log (compras(false, true))
console.log (compras(false, false))

