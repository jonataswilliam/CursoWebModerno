// Closure é o escopo criado quando definimos a funcão. 
      // Esse escopo permite a função acessar e manipular variáveis externas à função

      // Contexto Léxico em ação
      const x = 'Global'

      function fora () {
        const x = 'Local'
        function dentro () {
          return x
        }

        return dentro()
      }


      const minhaFuncao = fora()
      console.log(minhaFuncao)


      /*************Tópicos da Aula****************/
      // # A funcao lembra de onde foi declarada. 
      // # Uma funcão em Javascript é um Closure.
      // # Quando chamamos uma função, ela trará com ela o escopo em que ela foi declarada.