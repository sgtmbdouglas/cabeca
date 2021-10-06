import React from 'react';
import Header from './Header'; 
import './App.css';
import Contente from './content';
import Footer from './footer';
// const compromissos = ['acordar', 'estudar', 'passear com o cachorro', 'dormir'];
// const Task = (value) => {
  // return (
    // <li>{value}</li>
  // );
// }
// const mapeando = compromissos.map((elemento) => Task(elemento) )

// function App() {
//   return (
//     mapeando
//   );
// }
function App() {
  return (
    <div>
    <Header />
    <Contente />
    <Footer />
    </div>
    );
}
export default App;
