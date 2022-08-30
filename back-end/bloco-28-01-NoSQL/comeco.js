use ("magazine");
// para usar o banco
// insere um item
db.inventory.insertOne({
  item: "notebook",
  qty: 50,
  size: { h: 8.5, w: 11, uom: "in" },
  status: "A"
});
// insere varios items
db.inventory.insertOne([
    { "productName": "Lapis", "stock": 10, "price": 20,"status":"A"},
    { "productName": "Tesoura", "price": 5, "status": "B" },
    { "productName": "Borracha", "price": 15, "status": "A" }
]);
//pega os items
db.inventory.find({});
// primeiro parametro dentro do find e o filtro
// retorna o/os documento(s)(objeto todo que satisfizer)
db.inventory.find({ status: "D" });
db.inventory.find({ status: "D", item: "notebook" });
db.inventory.find({ status: "D", "size.w": 11 });
// o segundo parametro e o projection
// o id do mongo e _id
// 0=false 1=true na projecao
// retorna esse objeto contendo(1) ou sem esse argumento(0)
db.inventory.find({ status: "D", "size.w": 11 }, { item: 1, size: 1, _id: 0 });
// gt( greater than, maior que, >)// o operador $gt é do tipo integer(number)
db.inventory.find( { qty: { $gt: 49 } } )
// metodos de cursor limit e skip paginacao e talz
// limita o número de documentos retornados por uma consulta
db.inventory.find().limit(1);
//Esse método aplica uma indentação na exibição dos resultados(deixa bunitu bem)
db.inventory.find().limit(1).pretty();
// controla a partir de que ponto o MongoDB começará a retornar os resultados
// quantos documentos(objetos) serão "pulados" antes de começar a retornar
db.inventory.find().skip(5)
db.inventory.find().limit(10).skip(5)
// retornar o número de documentos de uma coleção
db.inventory.countDocuments({})
// remover colecao
db.inventory.drop();
// remover banco
db.dropDatabase('magazine')


// [
//     {
//       "_id": {
//         "$oid": "630d40250b6aecda8343e302"
//       },
//       "item": "notebook",
//       "qty": 50,
//       "size": {
//         "h": 8.5,
//         "w": 11,
//         "uom": "in"
//       },
//       "status": "A"
//     }
//   ]