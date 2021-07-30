//exercicio 1
let a = 5;
let b = 2;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
// exercicio 2
let c = 3
let d = 4
if (c > d){
    console.log('c maior que d');
}
else {
    console.log('d maior que c')
};
//exercicio 3
let e = 1
let f = 6
let g = 7

if (e > f && e > g){
    console.log('e ganhou');
} 
else if (f > g) {
    console.log('f ganhou');
}
else {
    console.log('g ganhou');
};
//exercicio 4
let h = 8
if (h > 0){
    console.log("positivo");
}
else if (h<0){
    console.log("negativo");
}
else {
    console.log(0);
};
//exercicio 5
let i = 50
let j = 60
let l = 70
let m = i+j+l
if (m == 180 ){
    console.log(true);
}
else if (i<0 || j<0 || l<0){
    console.log('erro');
}
else {
    console.log('false');
}
//exercicio 6
/*
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.Como desafio, faça o programa funcionar tanto se receber o nome
 de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/
let pecaXadrez = "cavalo"
switch (pecaXadrez) {
    case "cavalo":
        console.log("pare");
        break;
    case "bispo":
        console.log("anda na lateral")
        
}