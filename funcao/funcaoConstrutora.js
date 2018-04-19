// FUNCAO CONSTRUTORA
function Carro (velocidadeMaxima = 200, delta = 5) { // Delta define de quanto em quanto a aceleracao será feita.
    let velocidadeAtual = 0 // Propriedade privada. Não pode ser acessada de fora utlizando carrox.velocidadeAtual
    // Neste exemplo, é importante que velocidadeAtual seja privada para que o usuário não possa setar um valor acima da velocidade máxima, por exemplo.
    
    this.acelerar = function () { // Com o uso de 'this' deixamos as propriedades/métodos publicas para serem acessadas de fora utilizando carrox.acelerar()
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual =+ delta
        } else {
            velocidadeAtual =+ velocidadeMaxima
        }
    }
    
    
    // Forma de acessar apenas para pegar o valor velocidadeAtual de forma segura. Encapsulamento.
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new Carro // Instanciando um carro. Não é obrigatório passar parenteses 
uno.acelerar()
console.log(uno.getVelocidadeAtual())


const ferrari = new Carro (358, 20) // Instanciando um carro 
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

//********* TÓPICOS DA AULA ************/
// #FUNCAO CONSTRUTORA FUNCIONA COMO CLASSE / MOLDE. ATRAVÉS DELA INSTANCIAMOS OBJETOS
// #THIS FAZ COM QUE AS PROPRIEDADES/METODOS SEJAM PUBLICAS
// #PARA CRIAR PROPRIEDADES/METODOS PRIVADOS UTILIZAMOS let/const
// #NÃO É OBRIGATORIO O USO DE PARENTESES QUANDO INSTACIA UM OBJETO SEM PASSAR PARAMETROS
// 