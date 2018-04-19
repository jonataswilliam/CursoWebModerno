// IIFE (Immediately Invoked Function Expression)
// Função Auto Invocada

// Este tipo de função já se auto invoca no momento em que é declarada.
// Isso nos ajuda fugir do escopo global em nossa aplicação. Principalmente no browser. Pois podemos criar toda as nossas variaveis dentro dessa função, que pode ser iniciada assim que começarmos a rodar a aplicação.

(function () { // A funcao é declarada dentro de ( )
    console.log("Essa função será invocada na hora!")
    console.log("Foge do escopo mais abrangente!")
}) () // () já invoca na hora que é declarada

// Tudo que crirmos dentro da funcao só estará disponível dentro dela.
// Uma forma muito interessante para fugir do escopo Global