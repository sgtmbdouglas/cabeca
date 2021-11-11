const fatorial = 10;
let resultado = [];
let inicial = fatorial;
for (let i = inicial; i >= 0; i--) {
  resultado.push(i);
}
const exclamacao = ['!!!']
const varsde = resultado.join('...').concat(exclamacao);

console.log(varsde);
// console.log(resultado);
