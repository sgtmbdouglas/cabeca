// Operador $currentDate
// O operador $currentDate atribui ao valor de um campo a data corrente, utilizando um tipo Date ou timestamp. Se você não especificar o tipo, por padrão, o MongoDB atribui o valor do tipo Date. O operador $currentDate tem a seguinte forma:
// { $currentDate: { <campo>: <typeSpecification>, ... } }
// typeSpecification pode ser:
// Um valor booleano true para atribuir o valor da data corrente ao campo utilizando o tipo Date;
// Um documento que especifica o tipo do campo. Esse documento pode ser { $type: "timestamp" } ou { $type: "date" }. Esse operador é case-sensitive e aceita somente letras minúsculas: timestamp ou date
// considerando o seguinte documento da coleção customers:
// use conteudo;
db.customers.insertOne(
  { _id: 1, status: "a", lastModified: ISODate("2013-10-02T01:11:18.965Z") }
);
// " é possível alterar o valor do campo lastModified para a data corrente e criar o campo cancellation.date com o timestamp corrente,
// utilizando o operador $currentDate, e ainda alterar o campo status para D e criar o campo cancellation.reason com o valor "user request", utilizando o operador $set:"
db.customers.updateOne(
    { _id: 1 },
    { $currentDate: {
        lastModified: true,
        "cancellation.date": { $type: "timestamp" }
      }, $set: {
        "cancellation.reason": "user request",
        status: "D"
      }
    }
  );
// como resultado, o documento se parecerá com algo assim:
// {
//     "_id": 1,
//     "status": "D",
//     "lastModified": ISODate("2020-01-22T21:21:41.052Z"),
//     "cancellation": {
//       "date": Timestamp(1579728101, 1),
//       "reason": "user request"
//     }
//   }