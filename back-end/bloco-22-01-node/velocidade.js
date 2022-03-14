const readline = require('readline-sync');

function calculaVeloMedia() {   
    const distancia = readline.questionInt('Distancia percorrida (m):');
    const tempo = readline.questionInt('Tempo gasto (s)');
    const veloMedia = (distancia / tempo).toFixed(2);
    console.log(`Velocidade media: ${veloMedia} m/s`);
}
 calculaVeloMedia();