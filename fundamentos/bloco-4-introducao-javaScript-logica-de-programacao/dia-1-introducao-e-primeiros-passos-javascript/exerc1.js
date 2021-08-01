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
let nota = 99
if (nota <0 || nota >100){
    console.log('erro, nota apenas de 0 a 100')
}
else if (nota>=90 ){
    console.log('A');
}
else if (nota >= 80 ){
    console.log('B');
}
else if (nota >= 70){
    console.log('C');
}
else if (nota>=60){
    console.log('D')
}
else if (nota >=50){
    console.log('E')
}
else if (nota <50){
    console.log('F')
}

else {
    console.log("nao entendi como errou isso")
};

//exercicio 8
let num1 = 7
let num2 = 2
let num3 = 5
let eoq = false
if (num1%2===0 || num2%2===0 || num3%2===0){
    eoq = true
};
    console.log (eoq);

//exercicio 9
let o = 6
let p = 7
let q =4
let all=false
if (o %2===1 || p%2===1 || q%2===1){
    all=true
};
console.log(all)
//outra forma ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {   isOdd = true};

// exercicio 10
let imposto = 0.2;
let valorCustoInicial = 10;
const valorCustoTotal = valorCustoInicial * (1+imposto);
const valorVenda = 20;
let numeroDeVendas = 10;
let lucro = valorVenda - valorCustoTotal;
if (valorCustoInicial>=0){
    console.log(lucro*numeroDeVendas);
}
else {console.log('erro deu merda')};

//exercicio 11

/*
primeira tentativa

let salarioBruto=5000;
let aligota8=0.08;
let aligota9=0.09;
let aligota11=0.11;
let aligotaMaxima=570.88
let salarioMenosAligota8 = salarioBruto * (1 - aligota8);
let salarioMenosAligota9 = salarioBruto * (1 - aligota9) ;
let salarioMenosAligota11 = salarioBruto * (1 - aligota11);
let salarioMenosAligotaMax = salarioBruto - aligotaMaxima;

if (salarioBruto<=1556.94){
    console.log(salarioMenosAligota8);
}
else if (salarioBruto>1556.94 && salarioBruto<=2594.92){
    console.log(salarioMenosAligota9);
}
else if (salarioBruto>2594.93 && salarioBruto<=5189.82){
    console.log(salarioMenosAligota11);
}
else if (salarioBruto>5189.82){
    console.log(salarioMenosAligotaMax);
};
let inss75= 0.075;//parcela de 142,80 De R$ 1.903,99 a 2.826,65:
let inss15= 0.15;//parcela de 354,80  De R$ 2.826,66 a R$ 3.751,05
let inss22= 0.22;//parcela de 636,13 De R$ 3.751,06 a R$ 4.664,68
let inss27= 0.27;//parcela de 869,36 Acima de R$ 4.664,68
let parcela75=142;
let parcela15=354.80;
let parcela22=636.13;
let parcela27=869.36;
let reducao75= 55;//2.361,3772 max e 1416,8245

if (salarioMenosAligota8<= 1903.98){ 
    console.log(salarioMenosAligota8);
}
else if(salarioMenosAligota9>1903.99 && salarioBruto<=2826.65){
    console.log('aligota de 7,5%, ');
}
else if (salarioBruto>2826.65 && salarioBruto<=3751.05){
    console.log('aligota de 15%, ');
}
else if (salarioBruto>3751.05 && salarioBruto<=4664.68){
    console.log('aligota de 27,5%, ');
}
else if (salarioBruto>4664.68) {
    console.log('aligota de 27,5%, ');
}
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, 
calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
 */
let salariobruto=3000;
let inss;
let ir;
if (salariobruto<=1556.94){
    inss = salariobruto*(1-0.08);
}else if (salariobruto<=2594.92){
    inss = salariobruto*(1-0.09);
}else if (salariobruto<=5189.82){
    inss = salariobruto*(1-0.11);
}else {inss = salariobruto - 570.88}

if (inss<=1903.98){
    ir=0;
} else if (inss<=2826.65){
    ir=inss*0.075-142.80;
}else if (inss<=3751.05){
    ir=inss*0.15-354.80;
}else if (inss<=4664.68){
    ir=inss*0.225-636.13;
}else{ ir=inss-869.36;
}
console.log('salario liquido :', inss-ir,'$');