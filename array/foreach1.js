const aprovados = ["Ana", "Bia", "Rafael"]

// forEach recebe uma funcao como parametro que irá executar para cada elemento do array.
// Na funcao passada o primeiro parametro é o valor do elemento da vez, o segundo é o indice e o terceiro é o proprio array.
aprovados.forEach(function(valor, indice, array) {
    console.log(`${indice+1}) ${valor}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(`${nome}`))


const exibirAprovados = (nomeAprovado, indice) => console.log(`${indice+1}) ${nomeAprovado}`)
aprovados.forEach(exibirAprovados)