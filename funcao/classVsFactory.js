class Pessoa {
          constructor (nome) {
              this.nome = nome
          }

          falar () {
              console.log(`Olá meu nome é ${this.nome}`) // Se não passarmos this, dará erro pois nome não está definido dentro do escopo falar.
          }
      }

      const p1 = new Pessoa('João')
      p1.falar()


      const criarPessoa = nome => {
          return {
              falar : () => console.log(`Meu nome é ${nome}`)
          }
      }

      const p2 = criarPessoa('João')


      // Se atribuirmos essas classes ao clique do botão no body do document, veremos que utilizando o método de class nome será indefinido pois this varia nesta situação. Utilizando a função factory não, pois passamos a variável nome como parâmetro da funcao.