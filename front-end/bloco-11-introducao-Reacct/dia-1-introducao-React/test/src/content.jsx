import React from "react"

const conteudos = [
  {
  conteudo: 'High Order Functions',
  bloco: 8,
  status: 'Aprendido'
  },
  {
  conteudo: 'Composicao de Componentes',
  bloco: 11,
  status: 'Aprendendo',
  },
  {
  conteudo: 'Composicao de Estados',
  bloco: 12,
  status: 'Aprenderei'
  },
  {
  conteudo: 'Redux',
  bloco: 16,
  status: 'Aprenderei'
  },
]; 

  const vapo = (tendi, index) => {
    return (
      <div key = {index}>
      <p>conteudo: {tendi.conteudo}</p>
      <p>bloco: {tendi.bloco}</p>
      <p>status: {tendi.status}</p>
      </div>
    )
  }
  
const GetConteudo = conteudos.map((elemento, index) => vapo(elemento, index))

class Contente extends React.Component{
  render() {
    return (
      GetConteudo
    )
  }
}

export default Contente;

// class Content extends React.Component{
//   render() {
//     return (
//       conteudos.map((elemento) => {
//         return (
//           <div>
//           <p>conteudo: {elemento.conteudo}</p>
//           <p>bloco: {elemento.bloco}</p>
//           <p>status: {elemento.status}</p>
//           </div>
//         )
//       }
//     )
//     )
//   }
// }