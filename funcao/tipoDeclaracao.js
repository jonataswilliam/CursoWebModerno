// function declaration
function soma(x , y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression. Pouco utilizada.
const mult = function mult(x, y) { //A unica vantegem nesse tipo de declaraçao é na hora de debugar o nome da funcao irá aparecer
    return x * y
}

// Quando declaramos a funcao no modo declaration podemos declará-la no final do código e chama-la antes, pois o interpretador JS pega esse bloca e joga para cima no comeco da interpretaçao.
// Isso não ocorre no modo expression nem na named expression. Só pode chamada depois de ser declarada.
