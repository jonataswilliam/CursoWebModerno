// O node possui um mecanismo de busca para buscar biblitecas de terceiros instaladas.
// Ele busca dentro da pasta node_modules > O nome da biblioteca > O arquivo index dentro da pasta

// _ é comum para quem usa a biblioteca lodash
const _ = require('lodash')

setInterval(() => console.log( _.random(1, 1000)), 1000)