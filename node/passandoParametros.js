// ...nomes permite passar quantos parametros quiser
module.exports = function (...nomes) {
    return nomes.map(nome => `Bom dia, ${nome}`)
}