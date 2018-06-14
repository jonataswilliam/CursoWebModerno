// Node faz cache dos modulos, adotando o padrao Sigleton
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}