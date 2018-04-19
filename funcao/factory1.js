// Função Factory é uma função que retorna um Objeto

// Aqui já estamos objeto instanciado
const prod1 = {
    nome : '...',
    preco : 4000
}

// Se quisermos criar outro produto igua ao de cima teríamos que fazer isso novamente
const prod2 = {
    nome : '...', 
    preco : 1000
}


// Para que não tenhamos que repetir o código todas as vezes que quisermos um objeto novo, utilizamos as Funções Factory's      
function criarPessoa () {
    return {
        nome: 'Ana', // Podemmos deixar os valores fixos ou passar através dos parâmetros da função
        sobrenome: 'Silva'
    } 
}

console.log(criarPessoa())

/*****TÓPICOS DA AULA*****/
// # Factory é uma função que sempre retorna um novo objeto.
// # Mesmo não utilizando a palavra new, sempre criamos uma nova instância pois retornamos uma declaração de objeto de forma literal
// # Tem como função "fabricar" novos objetos