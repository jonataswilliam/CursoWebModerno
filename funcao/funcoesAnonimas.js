const soma = function (a, b) {
        return a + b;        
      }

      const imprimeResultado = function (a, b, operacao = soma) {
        console.log(operacao(a,b))
      }

      imprimeResultado(3, 4)      
      imprimeResultado(3, 4, soma)
      imprimeResultado(3, 4, function (x, y) {
        return x - y
      })

      // Funcao Arrow sempre será anônima
      imprimeResultado(3, 4, (x, y) => x - y)

      const pessoa = {
        falar : function ()  {
          console.log ('Opa')
        }
      }

      new pessoa
      pessoa.falar()