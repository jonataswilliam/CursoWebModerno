// Escopo define o local de onde a variável é visivel.

{
    {
        {
            var sera = "Sera???" // Declarando com VAR o escopo é ignorado desde que não seja uma FUNÇÃO.
        }
    }
}

function teste () {
    var local = 123 // Var respeita somente escopo de funcao.
    console.log (local) 
}
// console.log (local) // Não encontrará a variável
console.log (sera)

// Quando estamos utilizando aplicação WEB e criamos uma variável tipo VAR fora de uma função, ela é criada de forma global e estará dentro de WINDOW.

