// Para alterar um único documento
// ele altera apenas o primeiro documento que satisfaça o critério de filtro
//  o método db.colecao.updateOne() é utilizado para alterar o primeiro documento na coleção inventory em que o campo item seja igual a "paper":
// db.colecao.updateOne(<filtro>, <update>, <opcoes>);
db.inventory.updateOne(
    { item: "paper" },
    { $set: { "size.uom": "cm", status: "P" } }
  );
//  dois parâmetros foram passados no método:
// O primeiro deles é o filtro. Nesse caso, um filtro simples de igualdade, mas outros operadores podem ser utilizados aqui;
// O segundo é a operação de update em si. Nesse caso, foi utilizado o operador de atualização $set para alterar o valor do campo size.uom para cm e o valor do campo status para P
// o método db.colecao.updateOne() com o parâmetro de filtro vazio { }, o resultado é a atualização do primeiro documento presente em colecao

// db.colecao.updateMany(<filtro>, <update>, <opcoes>).
// O método db.colecao.updateMany() permite que vários documentos que satisfaçam o critério de filtro sejam alterados de uma única vez
// o método db.colecao.updateMany() é utilizado para alterar todos os documentos da coleção inventory em que o valor do campo qty seja menor do que 50
db.inventory.updateMany(
    { "qty": { $lt: 50 } },
    { $set: { "size.uom": "in", status: "P" } }
  );
// $set para alterar o valor do campo size.uom para in e o valor do campo status para P
// se tiver 10 documentos na coleção inventory em que o valor do campo qty seja menor do que 50 (esse valor foi passado como parâmetro do filtro e utilizou o operador $lt), todos esses documentos serão alterados em uma única operação.
// o método db.colecao.updateMany() com o parâmetro de filtro vazio { }, o resultado é a atualização de todos os documentos presentes em colecao


