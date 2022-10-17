// Operador $push
// O operador $push adiciona um valor a um array. Se o campo não existir no documento, um novo array com o valor em um elemento será adicionado.
// { $push: { <campo1>: <valor1>, ... } }
// Em conjunto com o $push você pode utilizar o que chamamos de modificadores. Cada um desses modificadores tem funções específicas que você verá melhor com exemplos. São eles
// $each: Adiciona múltiplos valores a um array
// $slice: Limita o número de elementos do array. Requer o uso do modificador $each
// $sort: Ordena os elementos do array. Requer o uso do modificador $each;
// $position: Especifica a posição do elemento que está sendo inserido no array. Também requer o modificador $each. Sem o modificador $position, o operador $push adiciona o elemento no final do array.
