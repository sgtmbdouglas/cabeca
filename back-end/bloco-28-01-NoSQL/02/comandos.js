// operadores de comparação = execute consultas comparando os valores de atributos dos documentos de uma coleção
// os operadores são identificados pelo prefixo $ /// sintaxe padrão que é composta por um subdocumento: { <campo>: { <operador>: <valor> } }
const OdC = {
    $lt: "less than, menor que, <",
    // "seleciona os documentos em que o valor do atributo filtrado é menor do que o valor especificado": db.inventory.find({ qty: { $lt: 20 } })
    $lte: "less than or equal, menor ou igual a, <=",
    $gt: "greater than, maior que, >",
    $gte: "greater than or equal, maior ou igual a, >=",
    $eq: "equal, igual a, =",
    $ne: "not equal, diferente de, !=, <>",
    $in: "in, dentro de",
    // "seleciona os documentos em que o valor do atributo é igual a um dos valores do array"
    // db.inventory.find({ qty: { $in: [ 5, 15 ] } })
    // "retorna todos os documentos da coleção inventory em que o valor do atributo qty é 5 ou 15."
    // "executar comparações de igualdade com mais de um valor no mesmo atributo."
    $nin: "not in, não está dentro de"
    // "seleciona os documentos em que o valor do atributo filtrado não é igual ao especificado no array, ou o campo não existe"
    // db.inventory.find( { qty: { $nin: [ 5, 15 ] } } )
    // "seleciona todos os documentos da coleção inventory em que o valor do atributo qty é diferente de 5 e 15. Esse resultado também inclui os documentos em que o atributo qty não existe."
}
// "operadores lógicos também podem ser utilizados nos mesmos métodos para leitura e atualização de documentos do MongoDB.
// Eles ajudam a elaborar consultas mais complexas, contendo cláusulas para retornar documentos que satisfaçam os filtros"
// operadores lógicos
const FA = {
    $not: "not, inverte o resultado da expressão",
    // { campo: { $not: { <operador ou expressão> } } }
    // "O operador $not executa uma operação lógica de NEGAÇÃO no < operador ou expressão > especificado e seleciona os documentos
    // que não correspondam ao < operador ou expressão >. Isso também inclui os documentos que não contêm o atributo."
    // db.inventory.find({ price: { $not: { $gt: 1.99 } } })
    // "seleciona todos os documentos na coleção inventory em que o valor do atributo price é menor ou igual a 1.99
    // (em outras palavras, não é maior que 1.99), ou em que o atributo price não existe."
    // { $lte: 1.99 }, os documentos retornados serão somente aqueles em que o campo price existe e cujo valor é menor ou igual a 1.99
    $nor: "not or, semelhante ao or, porém trabalha com a condição false (MAIS INFORMACOES NA CONST OL)" 
}
const OL = {
    $and: "and, se todas as condições forem verdadeiras retorna true",
    // "executa a operação lógica E num array de uma ou mais expressões e seleciona os documentos que satisfaçam todas as expressões no array"
    // "O operador $and usa o que chamamos de avaliação em curto-circuito (short-circuit evaluation). Se alguma expressão for avaliada como falsa,
    // o MongoDB não avaliará as expressões restantes,pois o resultado final sempre será falso independentemente do resultado delas."
    // { $and: [{ <expressão1> }, { <expressão2> } , ... , { <expressãoN> }] }
    $or: "or, se apenas uma condição for verdadeira retorna true",
    // "$or executa a operação lógica OU em um array de uma ou mais expressões e seleciona os documentos que satisfaçam ao menos uma das expressões"
    // { $or: [{ <expression1> }, { <expression2> }, ... , { <expressionN> }] }
    // db.inventory.find({ $or: [{ qty: { $lt: 20 } }, { price: 10 }] })
    // "Essa consulta seleciona todos os documentos da coleção inventory em que o valor do atributo qty é menor do que 20 ou o valor do atributo price é igual a 10."
    nor: "também executa uma operação lógica de NEGAÇÃO,",
    // "porém, em um array de uma ou mais expressões, e seleciona os documentos em que todas essas expressões falhem, ou seja,
    // seleciona os documentos em que todas as expressões desse array sejam falsas."
    // { $nor: [ { <expressão1> }, { <expressão2> }, ...  { <expressãoN> } ] }
    // db.inventory.find({ $nor: [{ price: 1.99 }, { sale: true }] })
    // Essa query retorna todos os documentos da coleção inventory que: Contêm o atributo price com o valor diferente de 1.99 e o atributo sale com o valor diferente de true
    // Ou contêm o atributo price com valor diferente de 1.99 e não contêm o atributo sale, Ou não contêm o atributo price e contêm o atributo sale com valor diferente de true,
    // Ou não contêm o atributo price e nem o atributo sale
    // FA.not: ""
}
// filtros avançados com
// operador de elemento
const OE = {
    $exists: "exists, verifica a existência de um atributo"
    // Sintaxe: { campo: { $exists: <boolean> } }
    // "Quando o <boolean> é verdadeiro (true), o operador $exists encontra os documentos que contêm o atributo,
    // incluindo os documentos em que o valor do atributo é igual a null. Se o <boolean> é falso (false),
    // a consulta retorna somente os documentos que não contêm o atributo."
    // db.inventory.find({ qty: { $exists: true, $nin: [ 5, 15 ] } })
    // "seleciona todos os documentos da coleção inventory em que o atributo qty existe E seu valor é diferente de 5 e 15."
}
// método
const M = {
    "sort()": "sort, ordenar",
    // db.colecao.find().sort({ "campo": "1 ou -1"})
    // "Quando existe a necessidade de ordenar os documentos por algum atributo, o método sort() se mostra muito útil.
    // Usando um valor positivo (1) como valor do atributo, os documentos da consultas são ordenados de forma crescente ou
    // alfabética (também ordena por campos com strings). Em complemento, usando um valor negativo (-1), os documentos de saída
    // estarão em ordem decrescente ou contra alfabética"
    // Esse método pode ser combinado com o método find():
    // db.example.find({}, { value, name }).sort({ value: -1 }, { name: 1 })
    // O sort() só pode ser usado se tiver algum resultado de busca antes:
    // db.colecao.find().sort({ nomeDoAtributo: 1 }) certo
    // db.colecao.sort({ nomeDoAtributo: 1 })  errado
    "deleteOne()": "remove apenas um documento, que deve satisfazer o critério de seleção,",
    // "Se nenhum valor for passado como parâmetro, a operação removerá o primeiro documento da coleção"
    // db.inventory.deleteOne({ status: "D" })
    // remove o primeiro documento da coleção inventory em que o atributo status é igual a D:
    "deleteMany()": "remove todos os documentos que satisfaçam o critério de seleção.",
    // db.inventory.deleteMany({ status : "A" })
    // remove todos os documentos da coleção inventory em que o atributo status é igual a A
    // Para remover todos os documentos da coleção, basta não passar nenhum parâmetro para o método deleteMany():
    // db.inventory.deleteMany({})
}

// Múltiplas expressões especificando o mesmo atributo {
//  db.inventory.find({
//         $and: [
//             { price: { $ne: 1.99 } },
//          { price: { $exists: true } }
//      ]
//  })
// Essa consulta seleciona todos os documentos da coleção inventory em que o valor do atributo price é diferente de 1.99 e o atributo price existe.
// }

// Múltiplas expressões especificando o mesmo operador {
    // db.inventory.find({
    //     $and: [
    //         { price: { $gt: 0.99, $lt: 1.99 } },
    //         {
    //             $or: [
    //                 { sale : true },
    //                 { qty : { $lt : 20 } }
    //             ]
    //         }
    //     ]
    // })
    // Essa consulta seleciona todos os documentos da coleção inventory em que o valor do campo price é maior que 0.99 e
    // menor que 1.99, E o valor do atributo sale é igual a true, OU o valor do atributo qty é menor do que 20. Ou seja,
    // essa expressão é equivalente a (price > 0.99 E price < 1.99) (onde o E está implícito na vírgula aqui { $gt: 0.99, $lt: 1.99 }) E (sale = true OU qty < 20).
// }
const ss = 55;
// porque no corse o operador exist nao esta entre os de comparacao ou logico, de que tipo ele e?