// Operadores $min e $max
// Ambos fazem o mesmo tipo de comparação antes de executar a operação, porém em "sentidos" diferentes
// $min: Altera o valor do campo atual para o valor passado pelo método se o valor passado pelo método for menor do que o valor do campo atual
// $max: Altera o valor do campo atual para o valor passado pelo método se o valor passado pelo método for maior do que o valor do campo atual
// Ambos podem comparar valores de diferentes tipos, utilizando sempre a ordem de comparação BSON abaixo
// https://www.mongodb.com/docs/manual/reference/bson-type-comparison-order/#faq-dev-compare-order-for-bson-types
// Considere um cenário em que temos uma collection com três documentos, cada documento possui um atributo id e um atributo campo que é um número inteiro
db.collection.find();
[
    { _id: 1, campo: 25 },
    { _id: 2, campo: 50 },
    { _id: 3, campo: 100 }
  ]
// aplicar um update utilizando o operador $max. Nosso intuito é atingir todos os documentos com o atributo campo que possuem um valor de no máximo 75
// nesse caso, o operador não só define o escopo máximo, como também o conteúdo que o campo deve passar a ter:
db.collection.updateMany({}, { $max: { campo: 75 } });
// Atualizando todos os valores do atributo "campo"
// para 75 caso sejam menores

db.collection.find();
[
    { _id: 1, campo: 75 }, // valor anterior: 25
    { _id: 2, campo: 75 }, // valor anterior: 50
    { _id: 3, campo: 100 }, // não encontrou no escopo
  ]

//  o operador $min é praticamente a mesma coisa, porém na direção inversa:
db.collection.updateMany({}, { $min: { campo: 42 } });
// Atualizando todos os valores do atributo "campo"
// para 42 caso sejam maiores

db.collection.find();
[
    { _id: 1, campo: 42 }, // valor anterior: 75
    { _id: 2, campo: 42 }, // valor anterior: 75
    { _id: 3, campo: 42 }, // valor anterior: 100
  ]
// Se executar a operação, e ela não for satisfeita nao terá efeito no documento, e o documento não será alterado:

// Comparando datas
// pode utilizar os operadores $min e $max para comparar valores do tipo Date.
// use conteudo;
db.tags.insertOne(
  {
    _id: 1,
    desc: "crafts",
    dateEntered: ISODate("2019-10-01T05:00:00Z"),
    dateExpired: ISODate("2019-10-01T16:38:16Z")
  }
);
// "A operação abaixo utiliza o operador $min para comparar o valor do campo dateEntered e altera seu valor,
// porque 25/09/2019 é uma data menor (anterior) do que o valor atual. Ao mesmo tempo, o operador $max também é usado para comparar
// o valor do campo dateExpired e altera esse valor, porque 02/10/2019 é uma data maior (posterior) do que o valor atual:"
db.tags.update(
    { _id: 1 },
    {
      $min: { dateEntered: new Date("2019-09-25") },
      $max: { dateExpired: new Date("2019-10-02") }
    }
  );