/*****************************************************************************
 * Quando trabalhamos com tipos primitivos (int, boolean, etc), a atribuição é
 * feita por valor.
 * 
 * Quando trabalhamos com tipos não primitivos (OBJETO, FUNCOES), a atribuição é
 * feita por referência.
 * 
 */


//Atribuicao por referência
const a = {nome: "Teste"} // CONST A receberá um endereço de memória apontando para onde está localizado o OBJETO.
console.log (a);

const b = a; // B não está recebendo o CONTEÚDO do objeto, mas sim o endereco de memoria de onde esta localizado. Se mudarmo B, logo mudaremos o objeto que também está em A.
console.log (b); 

b.nome = "Opa";
console.log (a);



// Atribuicao por valor.
let c = 3
console.log(c);

let d = c;
console.log (d)

d = 10
console.log(c);



let valor // Nao inicializada
console.log (valor) // Retornara como UNDEFINED, pois declaramos mas nao inicilizamos a variavel
// console.log (valor2) // Retornara como IS NOT DEFINED, pois nem sequer foi declarado.

// Quando a variavel esta como NULL, ela não está armazenando nenhum valor e nem um endereço de referencia.
valor = null // Ausencia de valor, mas não é mais UNDEFINED pois foi inicializaada como NULL.
console.log (valor)
//console.log valor.toString()) // Erro. Pois não é posivel acessar nada quando uma variavel está NULL ou UNDEFINED

/* 
 *Quando trabalhamos com tipo que atribuem por referencia, o nulo faz sentido pois utilizamos quando queremos fazer uma variavel parar de
 * apontar para aquele endereco de memoria. Lembrando que se alterassemos a variável, estaríamos alterando o valor que esta no endereco que
 * poderia estar sendo acessada por outras variaveis.
 
 * Não é legal atribuir UNDEFINED para uma variável, pois essa palavra serve para sabermos que uma variável não foi inicializada.
 * Deixa para a linguagem definir o que é UNDEFINED.
 
 */
 
 
 
 
 const produto = {}
 console.log (produto.preco) // Preco não foi inicializado dentro de produto. Mas produto está definido
 console.log (produto.preco) // TYPE ERROR pois não existirá a proprieda A do que está indefinido
 // Podemos tentar acessar alguma propriedade não definida de algo que foi inicializado. Mas não de algo que não foi.
 console.log (produto)
 
 
 produto.preco = 3.50
 console.log (produto)
 
 delete produto.preco
 console.log (produto) // DELETE usado para tirar um atributo de um OBJETO
 
 /****************************************
  * Exemplo de aplicação para null.
  * Temos um produto que está como gratuito e outra que está sem preço catalogado ainda.
  * Para o grátis atribuímos o preco como 0 pois é um preço válido. Para o não cadastrado como NULL.
  *
  */ 
  
 produto.preco = null
 console.log (produto.preco)
 console.log (!!produto.preco) // Como está nulo, a logica dará falsa.