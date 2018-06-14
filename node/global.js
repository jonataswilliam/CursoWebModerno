
// Quando criarmos algo dentro do objeto GLOBAL (nao recomentadado) todos os arquivos do sistema tera acesso 
global.minhaApp = Object.freeze({
    saudacao() {
        return `Estou em todos os lugares`
    },
    nome: "Sistema Legal"
})