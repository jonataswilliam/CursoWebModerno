const schedule = require('node-schedule')

// String de acordo com os parametros passadossignifica que será executada de(5 em 5s(*/. Se colocarmos apenas o numero ele será executado apenas naquele minuto), em qualquer minuto(*), as 14 horas, em qualquer dia do mes(*), em qualquer mes(*), executar na segunda feira(1. A contagem comeca sendo domingo = 0)
const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 1', function () {
    console.log('Executando Tarefa 1', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Tarefa 1 cancelada!')
}, 20000)


// Agendamento de tarefa de outra maneira, utilizando o schedule.RecurrenceRule()
const regra = new schedule.RecurrenceRule()
// Dias da semana (De segunda a sexta)
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 14
regra.second = 10

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})