// var n1 = parseFloat(prompt("Digite o Primeiro Valor: "));
// var n2 = parseFloat(prompt("Digite o Segundo Valor: "));

// alert(n1 + n2);// Adição
// alert(n1 - n2);// Subtração 
// alert(n1 * n2);// Multiplicação
// alert(n1 / n2);// Divisao
// alert(n1 % n2); // Modulo ( EX: 5% de 200 = 5*200/100 ) 
// alert(n1 ** n2); // Exponenciação (Numero Elevado EX: 3 elevado a 3 igual a 9)


// //Incremento
// var n = 1;
// alert(n);
// n++
// ++n
// n = n + 1
// n = n + 4
// n+=4 

// //Decremento
// var nn = 1 
// alert(nn)
// nn--
// --nn


//Operadores relacionais
// < Menor 
// <= Menor Igual
// > Maior 
// >= Maior Igual
// == Igual
// === Identico
// != Diferente
// !== Diferente


// Condicoes Simples
// var veloci = 60;

// if (veloci >= 60) {
//     document.write(`Velocidade não permitida. Você foi MULTADO!`);
// } else {
//     document.write(`Velocidade permitida. Você não foi MULTADO!`);
// }


// Condicoes Compostas
// var anoAtual = parseInt(prompt("Digite o Ano Atual: "));
// var anoNasci = parseInt(prompt("Digite sua Data de nascimento: "));

// var idade = anoAtual - anoNasci;

// document.write(`Em ${anoAtual} você tera ${idade} anos <br>`);

// if(idade >= 18) {
//     document.write(`Atingiu a Maioridade`);
// } else {
//     document.write(`Não Atingiu a Maioridade`);
// }


//Operadores Logicos
// ! = Negação = NÃO
// && = Conjução = E
// || = Disjunção = OU


// var nota1 = parseFloat(prompt("Digite a Nota 1: "));
// var nota2 = parseFloat(prompt("Digite a Nota 2: "));
// var nota3 = parseFloat(prompt("Digite a Nota 3: "));
// var nota4 = parseFloat(prompt("Digite a Nota 4: "));

// var media = (nota1 + nota2 + nota3 + nota4) / 4;

// if (media >= 5 && media <= 10) {
//     alert(`Sua Media Foi ${media}. Você foi Aprovado`);
// } else {
//     alert(`Sua Media Foi ${media}. Você foi reprovado`)
// }


// Condição Aninhada
// if (media >= 0 && media <= 4) {
//     document.write(`Sua Media Foi ${media}. Você esta retido`)
// } else if (media >= 5 && media <= 7) {
//     document.write(`Sua Media Foi ${media}. Você pode Melhorar`)
// } else if (media >= 8 && media <= 9) {
//     document.write(`Sua Media Foi ${media}. Você foi Muito Bem`)
// } else {
//     document.write(`Sua Media Foi ${media}. Você foi Perfeito`)
// }


// Switch
// var n1 = parseInt(prompt("Digite um Numero de 1 ao 4: "));

// switch (n1) {
//     case 1:
//         alert("Você Digitou 1");
//         break
//     case 2:
//         alert("Você Digitou 2");
//         break
//     case 3:
//         alert("Você Digitou 3");
//         break
//     case 4:
//         alert("Você Digitou 4");
//         break
//     default:
//         alert("Você não Escolheu Nenhum")
// }

// var nota1 = parseFloat(prompt("Digite a Nota 1: "));
// var nota2 = parseFloat(prompt("Digite a Nota 2: "));

// var media = parseFloat((nota1 + nota2) / 2);

// switch(true) {
//     case media > 6:
//         alert(`Você Foi Aproado`);
//         break
//     case media == 5:
//         alert(`Você esta de recuperacao`);
//         break
//     case media <= 4:
//         alert(`Você Foi reprovado`);
//         break
//     default:
//         alert(`ERROR: Alguma Expreção esta Incorreta`);
// }


// Formatação de Letras e Numero

// Letras
// var nome = prompt("Digite Seu Nome: ");
// var nome = prompt("Digite Seu Nome: ").toLowerCase();

// document.write(`Maiusculo ${nome.toUpperCase()}. <br>`);
// document.write(`Minisculo ${nome.toLowerCase()}. <br>`);
// document.write(`Quantidade de Letras ${nome.length}. <br>.`)

// Numeros
// .replace('.', ','); Transforma o Ponto na Virula
// .tofixed(2); Limita as casa Decimais
// .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) Coloca o Sifrão

var n1 = parseFloat(prompt("Digite um Valor: ").replace('.', ','));
var n2 = parseFloat(prompt("Digite um Valor: ").replace('.', ','));

var total = n1 + n2;

document.write(`a Soma é ${total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);