// Fs (File System) ja vem instalado no core do Node
const fs = require('fs')

// __dirname == diretorio atual. Esta disponivel em todos os arquivos do NODE
const caminho = __dirname + '/arquivo.json'

// Lendo o arquivo de forma Síncrona...só atenderá a próxima requisão após o arquivo for totalmente lido.
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

// Assíncrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


// Forma mais simples de se ler um arquivo quando for JSON
// Nao é necessario usar o JSON.parse
const config = require('./arquivo.json')
console.log(`${config.db.user}:${config.db.pass}`)


// Leitura de pastas
fs.readdir(__dirname, (err, arquivos) => {
    console.log(arquivos)

    // Teste meus.
    console.log(arquivos.filter(a => a.length > 15))
    const arqFiltrados = arquivos.filter(a => a.length > 20)
    fs.readFile(`${__dirname}/${arqFiltrados}`, 'utf-8', (err, conteudo) => {
        console.log(conteudo)
    })
})