// Middleware pattern (chain of responsability)

// Ctx(contexto) é o objeto que é passado de um passo para o outro. Next é a funcao que ira chamar o proxima passo
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'


const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1))
    }

    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)