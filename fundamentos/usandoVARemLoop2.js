const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push( function () {
        console.log (i)
    })
}

funcs[2] ()
funcs[5] ()
funcs[8] ()

// Por I não ter escopo de bloco ele sempre retornará o valor final em que ele está.