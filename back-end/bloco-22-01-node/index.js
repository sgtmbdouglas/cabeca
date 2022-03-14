const readline = require('readline-sync');

const scripts = [
    {name: 'calcular IMC', script: './imc.js' },
    {name: 'Velocidade Media', script: './velocidade.js'},
    {name: 'Adivinha-cao', script: './sorteio.js'},
];

let mensagem = scripts.map((element, index) => 
    `${index + 1} - ${element.name}`
);
mensagem.unshift('Escolha um número para executar o script correspondente');
mensagem = mensagem.join('\n');
const scriptNumber = readline.questionInt(mensagem) -1;
const script = scripts[scriptNumber];
if(!script) return console.log('Número inválido. Saindo');

require(script.script);
