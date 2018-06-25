//  Avalia se -a foi passado como argumento no terminal
const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo) {
    // Saida padrao. Console.
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe seu nome:')

    // Pega o momento em que o usuario deu enten para entrar com os dados
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Ola ${nome}`)
    })

    
}