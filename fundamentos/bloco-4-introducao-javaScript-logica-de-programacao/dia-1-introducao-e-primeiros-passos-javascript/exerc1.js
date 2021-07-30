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
let i = 50;
let j = 60;
let l = 70;
let m = i+j+l;
if (m == 180 ){
    console.log(true);
}
else if ( i<0 || j<0 || l<0){
    console.log('erro isso nao e angulo');}
else {
    console.log(false);
};
//exercicio 6

let pecaDeXadrez = "TORRE";
switch (pecaDeXadrez.toLowerCase()){
    case "cavalo":
    console.log("2 casas para frente ou para trás e em seguida 1 casa para a direita ou para a esquerda");
    break;
    case "torre":
    console.log("frente e para trás, para a direita e para a esquerda");
    break;
    case "bispo":
    console.log("na diagonal mantendo-se sempre nas casas de mesma cor que se encontrava no início do jogo");
    break;
    case "rainha":
        console.log("pode se movimentar para todos os lados ");
        break;
    case "rei":
        console.log("1 casa em qualquer direção");
        break;
    case "reao":
            console.log("só se movimenta para frente");
            break;
    default:
        console.log("deu erro ai");
}
//exercicio 7
