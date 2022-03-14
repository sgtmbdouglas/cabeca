const readline = require('readline-sync');

const PESO = readline.questionFloat('Qual o seu peso?(em kg)');
const ALTURA = readline.questionInt('Qual a sua altura? (em cm)');

function calculaImc () {
    const peso = PESO;
    const altura = ALTURA;
    console.log(`Peso: ${peso}, Altura: ${altura}`);
    const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    console.log(`IMC: ${imc}`);
    if(imc < 18.5){
        return console.log('abaixo do peso(magreza)');
    }
    if (imc >= 18.5 && imc < 24.9) {
        return console.log('peso normal');
    }
    if (imc >= 25 && imc < 29.9) {
        return console.log('acima do peso (sobrepeso)');
    }
    if (imc >= 30 && imc < 34.9) {
        return console.log('Obesidade grau I');
    }
    if (imc >= 35 && imc < 39.9) {
        return console.log('Obesidade grau II');
    }
    if (imc >= 40) {
        return console.log('Obesidade grau III e IV');
    }
}

calculaImc();