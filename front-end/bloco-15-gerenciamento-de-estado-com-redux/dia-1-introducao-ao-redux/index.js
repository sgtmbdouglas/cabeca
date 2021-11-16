const Redux = require('redux');
const store = Redux.createStore();

const reducer = (state) => {
  console.log('asd',state);
  return state;
  };
  
  const store = Redux.createStore(reducer);
  store();
