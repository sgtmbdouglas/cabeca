// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const sumNumbers = numbers.reduce((result, number) => {
//   console.log(result); 
//   return result + number}); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
// console.log(sumNumbers); // 113

// Ou seja:
// const numbers = [50, 85, -30, 3, 15];

// const maior = (maiorr, elemento) => ((maiorr > elemento) ? maiorr : elemento);

// const veja = numbers.reduce(maior, 0);
// console.log(veja);
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => {
  console.log('elemento:', number);
  console.log('somador:', currentValue);
  return (number % 2 === 0) ? currentValue + number : currentValue;
};

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log('pares somados:', sumNumbers(numbers)); // 152

// function quantosParams(...args) {
//   console.log('parâmetros:', args);
//   return `Você passou ${args.length} parâmetros para a função.`;
// }

// console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'as' } = person;
console.log(nationality);

const multiply = (number, value=2) => {
 return number * value;
  // Escreva aqui a sua função
};

console.log(multiply(8));