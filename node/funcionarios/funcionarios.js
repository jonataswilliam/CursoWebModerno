const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
// Axios é um client http. Faz requisições para obter informações de algo que está remoto.
const axios = require('axios')


// Desafio. Retornar a funcionario Chinesa que ganha o menor salario.

const chineses = f => f.pais === "China"
const genero = f => f.genero === "F"
const pegaSalario = f => f.salario
const menorSalario = (func, funcAtual) => {
    // if(funcAtual.salario <= func.salario) {
    //     func = funcAtual
    // }
    // return func
    
    // Forma Otimizada
    return func.salario < funcAtual.salario ? func : funcAtual

}
axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)
    const pegaFuncionario = funcionarios.filter(chineses).filter(genero).reduce(menorSalario)
    console.log(pegaFuncionario)
})