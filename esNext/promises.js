//    // Promisses são usadas para processamentos async
    function falarDepoisDe(segundos, frase) {
      return new Promise((resolve, reject) => {
        // Simulando um delay de processamento
        setTimeout(() => {
          resolve(frase)
        }, segundos * 1000);
      })
    }

    // Para acessar o resultado de uma promisse atendida de forma correta utilizamos o then
    // Detro da promisse passamos o objeto que queremos passar para a funcao then quando a promisse for resolvida.
    // Podemos encadear .then e ir passando o objeto para frente
    falarDepoisDe(3, 'Que Legal')
      .then(frase => frase.concat('?!?'))
      .then(outraFrase => console.log(outraFrase))
