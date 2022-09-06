// Operador $set

// $set altera o valor de um campo específico
// Se o campo não existir, o operador $set adiciona um novo campo com o valor especificado. Se você especificar campos com dot notation, os documentos embedados necessários serão criados para suprir o caminho do campo.
// Você pode especificar múltiplos pares de campos-valores que o operador $set alterará ou criará cada um desses campos.

// Alterando campos no primeiro nível (top-level)
// o documento que corresponder ao critério de filtro em que o campo _id seja igual a 100, a operação a seguir altera o valor dos campos quantity, details e tags
db.products.update(
    { _id: 100 },
    { $set: {
        quantity: 500,
        details: { model: "14Q3", make: "xyz" },
        tags: [ "coats", "outerwear", "clothing" ]
      }
    }
  );
// altera o valor de quantity para 500, details para um novo documento embedado e tags para um novo array
//  vários campos foram agrupados e, com isso, são alterados em um mesmo comando! Assim, você pode alterar vários campos de uma única vez

// Alterando campos em documentos embedados
// alterar campos dentro de subdocumentos, você deve utilizar o mesmo conceito de dot notation visto durante as operações de find()
// a o valor do campo make dentro do subdocumento details em que o campo _id seja igual a 100
db.products.update(
    { _id: 100 },
    { $set: { "details.make": "zzz" } }
  );

// Alterando valores em arrays
// A query abaixo tem como critério de seleção o campo _id igual a 100. Ela altera o segundo elemento (índice 1) do array tags e o campo rating no primeiro elemento (índice 0) do array ratings
db.products.update(
    { _id: 100 },
    { $set: {
        "tags.1": "rain gear",
        "ratings.0.rating": 2
      }
    }
  );