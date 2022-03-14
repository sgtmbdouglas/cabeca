const readline = require('readline-sync');

function logResultado(numero, resposta) {
    if (numero !== resposta){
        return console.log(`Opa, nao foi dessa vez. o numero era ${numero}`);
    }
    return console.log('Parabens, numero correto');
}

function gaming(){
    const numero = parseInt(Math.random() * 10);
    const resposta = readline.questionInt(
        'Digite um número entre 0 e 10 para saber se é o número que estou pensando: '
    );
    logResultado(numero, resposta);
    const novamente = readline.question(
        'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
    );
    if (novamente !== 's') return console.log('Ok, ate a proxima!');

    gaming();
}
gaming();