var numero = 1
//let numero = 1 // Mesmo se esta variável for declarada como global, não dará conflito, pois com LET é tratado diferente em cada tipo de escopo.

{
    let numero = 2
    console.log ('dentro =', numero)
        
    // O LET respeita qualquer tipo de bloco, diferente do VAR.
    
}

console.log ('fora =', numero)

// O LET busca o nome da várivel do escopo menor para o maio.

