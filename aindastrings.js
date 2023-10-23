// O JavaScript traz em sua biblioteca-base vários métodos que usamos para manipular strings de texto: alterar de maiúsculas para minúsculas, contar quantas letras tem uma palavra, retirar espaços, juntar duas strings, etc.

// Vamos pensar em alguns exemplos práticos para fazer esse tipo de alteração. Por exemplo, para padronizar uma comparação entre strings:

const cidade = "belo horizonte"
const input = "Belo Horizonte"
console.log(cidade === input)

// false

// Nós, como pessoas, conseguimos perceber o valor das variáveis cidade e input como sendo da mesma cidade, Belo Horizonte. Porém, para o JavaScript, ambos os dados são apenas sequências de caracteres, e a comparação vai falhar, pois como já vimos, o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.

// Uma das formas de tratar isso é padronizando todos os inputs para o formato de texto que será comparado antes mesmo de fazer a comparação. Nesse caso, transformando todos os caracteres em letras minúsculas.

// No "aindastring-certo.js"