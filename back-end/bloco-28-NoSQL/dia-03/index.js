// Operadores de consulta
const operador_all = {
    $all : 'seleciona todos os documentos em que o valor do campo é um array que contenha todos os elementos especificados',
    // parece com o and mas para arrays
    // Utiliza-se $all sempre que é preciso passar mais de um valor de comparação
    // db.inventory.find({ tags: { $all: [ "ssl", "security" ] } });
    // diferenca usando $and
    // db.inventory.find({$and: [{ tags: "ssl" },{ tags: "security" }]});
}
const o_elemMatch = {
    $elemMatch: "seleciona os documentos que contêm um campo do tipo array com pelo menos um elemento que satisfaça todos os critérios de seleção especificados"
    // pode especificar várias queries para um mesmo array.
    // db.scores.find({ results: { $elemMatch: { $gte: 80, $lt: 85 } } });
    // seleciona somente os documentos em que o array results contém ao menos um elemento que seja maior ou igual a 80 e menor que 85
    // apenas o documento com o _id igual a 1 será retornado, já que o 82 satisfaz as duas verificações
}
const operador_size = {
    $size: 'seleciona documentos em que um array contenha um número de elementos especificado',
    // db.products.find({ tags: { $size: 2 } });
    // apenas os campos tags que sejam arrays e contenham exatamente 2 elementos serao retornados
    // o operador $size aceita apenas valores numéricos, ou seja, ele verifica se um array possui exatamente um certo número de elementos.
    // por exemplo, para trazer arrays com comprimento maior do que 2 ($gt: 2)
}
const operador_expr = {
    $expr: 'permite que você utilize expressões de agregação e construa queries que comparem campos no mesmo documento.',
    // db.monthlyBudget.find({$expr: { $gt: [ "$spent", "$budget" ] }});
    // o operador $expr busca os documentos em que o valor de spent exceda o valor de budget
    // 
}
const operador_regex = {
    $regex: 'fornece os "poderes" das expressões regulares (regular expressions) para seleção de strings',
    // MongoDB utiliza expressões regulares compatíveis com Perl (PCRE), versão 8.42, e com suporte a UTF-8.
    // db.products.find({ sku: { $regex: /789$/ } });
    // seleciona todos os documentos em que o campo sku "termine" com "789"
    // db.products.find({ sku: { $regex: /^ABC/i } });
    // retorna palavras "começando" com ABC
    // especificar a opção case-insensitive, fazendo com que o MongoDB ignore letras maiúsculas ou minúsculas
    // O caractere i ao lado da expressão indica a opção case-insensitive
    // apenas os documentos que contenham ABC no campo sku serão retornados, sem se importar se está em maiúsculo ou minúsculo
    // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
}
const operador_mod = {
    $mod: 'seleciona todos os documentos em que o valor do campo dividido por um divisor seja igual ao valor especificado (ou seja, executa a operação matemática módulo).',
    // db.inventory.find({ qty: { $mod: [4, 0] } });
    // seleciona todos os documentos da coleção em que o valor do campo qty módulo 4 seja 0
    // 
}