// tagged template = processa o template string dentro de uma funcao
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovados'
console.log(tag `${aluno} está ${situacao}.`)