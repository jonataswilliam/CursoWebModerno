const pilotos = ["Vetel", "Alonso", "Raikonen", "Massa"]
			
// Remove o ultimo elemento do Array
pilotos.pop()
console.log(pilotos)

// Add um elemento na ultima posicao do Array
pilotos.push("Verstapen")
console.log(pilotos)

// Remove o primeiro elemento do Array
pilotos.shift()
console.log(pilotos)

// Add um elemento na primeira posicao do Array
pilotos.unshift("Hamilton");
console.log(pilotos)

// Na posicao 2, nao estamos excluindo ninguém (0), e add "Botas" e "Massa"
pilotos.splice(2, 0, "Botas", "Massa")
console.log(pilotos)

// Na posicao 2, nao estamos excluindo 1 elemento
pilotos.splice(3, 1)
console.log(pilotos)

// Retorna um novo Array com os elementos da posicao 2 em diante.
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos);

// Retorna um novo Array com os elementos da posicao 1 até o indice 4. Porém o indice 4 não entra. 
algunsPilotos = pilotos.slice(1, 4)
console.log(algunsPilotos);