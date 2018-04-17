//  This é referenciado de acordo com o contexto em que esta sendo chamado

//  Se colocarmos no browse o código
/* function f1() {
    console.log(this===window)
}

function f1();

O RETORNO SERÀ TRUE. POIS O CONTEXTO EM QUE A FUNCAO FOI CHAMADA FOI GLOBAL (WINDOW) NO NAVEGADOR.

SE A FUNCAO FOR ACIONADO COM UM CLICK POR EXEMPLO, THIS NÃO SERÁ MAIS === A WINDOW POIS A CHAMADA FOI FEITA PELO ELEMENTO QUE FOI CLICADO.

Quando temos uma funcao tradicional em JS, this pode variar de acordo com quem chamou a funcao.


Dois grandes motivos para a crição da ArrowFunction
1. A Sintaxe reduzida
2. This não varia. This sempre será definido no contexto em que a funcao foi definida. Também conhecida como THIS LEXICO, pois é definido no contexto em que foi excrito.
*/