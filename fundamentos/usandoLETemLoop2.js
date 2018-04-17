const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push( function () {
        console.log (i)
    })
}

funcs[2] ()
funcs[5] ()
funcs[8] ()


// Por I ter escopo de bloco ele lembrará qual era o valor dele quando foi passado no laço.

// Por funçãoes em JAVASCRIPT serem CLOSURES, ela tem consciencia de quando ela foi definida.
