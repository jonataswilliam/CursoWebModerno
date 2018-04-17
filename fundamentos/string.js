const escola = "Cod3r";

console.log (escola.charAt(4)) // Pega o quarto character dentro da string 
console.log (escola.charAt(5)) // Pega o quinto character dentro da string. Retornara vazio
console.log (escola.charCodeAt(1))
console.log (escola.indexOf("C"))
console.log (escola.substring(1))
console.log (escola.substring(0, 3))
console.log ('Escola '.concat(escola).concat("!"))

// Literal são dados diretamente sem guardar em uma variável

console.log (escola.replace(3, "E"))
console.log (escola.replace(/\d/g, "E")) // Expressao regular para substituir digitos por E
console.log (escola.replace(/\w/g, "E")) // Expressao regular para substituir letras por E

console.log ("Ana, Maria, Braga".split(','))