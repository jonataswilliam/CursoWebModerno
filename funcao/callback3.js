// Exemplo de callback no Browser
document.getElementsByTagName('body')[0].onclick = function (e) { //Função de callback no click do body. "e" de Evento. É opcional. Precisa ser declarado apenas quando for utilizado na funcao
    console.log('O evento clique ocorreu')
}


document.getElementsByTagName('body')[0].onclick = () => console.log("O evento clique ocorreu2") // Declaracao em arrowFunction

