// Excercicio 09
// var anoAtual = parseInt(prompt("Digite o Ano Atual: "));
// var anoEntrada = parseInt(prompt("Digite o Ano de Entrada na Empressa: "));

// var promocao = anoAtual - anoEntrada;

// if (promocao >= 5) {
//     document.write(`Você esta Apto a Receber uma promocao`);
// } else {
//     document.write(`Você esta não esta Apto a Receber uma promocao`);
// }


// Excercicio 10
// var velo = parseFloat(prompt("Qual foi a Sua Velocidade: "));
// var multa = (velo - 60) * 7;

// if (velo > 60) {
//     document.write(`Você foi multado no Valor de ${multa}`);
// } else {
//     document.write(`Você esta Livre`);
// }


// Excercicio 11
// var nome = prompt("Qual o Seu Nome: ");
// var idade = parseInt(prompt("Qual a Sua Idade: "));
// var produto = parseFloat(prompt("Qual o Valor do Produto: ").replace('.', ','));

// var valorFinal8 = ((produto * 8) / 100);
// var descontoAdulto = produto - valorFinal8;

// var valorFinal15 = ((produto * 15) / 100);
// var descontoCriança = produto - valorFinal15;
// switch(true) {
//     case idade >= 18:
//         document.write(`Prezado ${nome} Você tera um Desconto de 8% entao o Valor de ${produto} sera agora de ${descontoAdulto.toFixed(2)}`);
//         break
//     case idade <= 17:
//         document.write(`Prezado ${nome} Você tera um Desconto de 15% entao o Valor de ${produto} sera agora de ${descontoCriança.toFixed(2)}`);
//         break
//     default:
//         document.write(`ERROR: Algum Parametro esta Errado`);
// }


// Excercicio 12
// var nota1 = parseFloat(prompt("Digite a Nota 1: "));
// var nota2 = parseFloat(prompt("Digite a Nota 2: "));
// var nota3 = parseFloat(prompt("Digite a Nota 3: "));
// var nota4 = parseFloat(prompt("Digite a Nota 4: "));

// var media = (nota1 + nota2 + nota3 + nota4) / 4;

// if (media > 9 && media <= 10) {
//     document.write(`O seu Conceito e A`);
// } else if (media > 7 &&  media <= 9) {
//     document.write(`O seu Conceito e B`);
// } else if (media > 5 && media <= 7) {
//     document.write(`O seu Conceito e C`);
// } else {
//     document.write(`O seu Conceito e D`);
// }


// Excercicio 13
// var n1 = parseFloat(prompt("Digite um Numero: "));
// var n1 = parseFloat(prompt("Digite um Outro Numero: "));

// if (n1 > n2) {
//     document.write(`O Numero Maior é ${n1}`);
// } else if (n1 < n2) {
//     document.write(`O Numero Maior é ${n2}`);
// } else if (n1 == n2) {
//     document.write(`O Numero ${n1} é o ${n2} sao iguais`);
// } else {
//     document.write(`ERROR: Algum Parametro Errado`);
// }


// Excercicio 14
// var largura = parseFloat(prompt("Qual a largura do Terreno"));
// var comprimento = parseFloat(prompt("Qual o comprimento do Terreno"));

// var metrosQuadrados = largura * comprimento;

// if (metrosQuadrados <= 80) {
//     document.write(`${metrosQuadrados}m² = TERRENO PEQUENO`)
// } else if (metrosQuadrados > 80 && metrosQuadrados <= 400) {
//     document.write(`${metrosQuadrados}m² = TERRENO MEDIO`)
// } else {
//     document.write(`${metrosQuadrados}m² = TERRENO GRANDE`)
// }


// Excercicio 15
// var nome = prompt("Qual o Seu Nome: ");
// var salario = parseFloat(prompt("Qual o Seu Salario Atual: "));
// var anosTrabalho = parseFloat(prompt("Quantos Anos Você Trabalha na Empressa? "));

// var n1 = (salario * 5) / 100;
// var n2 = (salario * 10) / 100;
// var n3 = (salario * 15) / 100;

// var aumentoSalarioN1 = n1 + salario
// var aumentoSalarioN2 = n2 + salario
// var aumentoSalarioN3 = n3 + salario

// if (anosTrabalho < 5) {
//     document.write(`${nome} Salario é ${salario} Com o Aumeno de 5% Agora é ${aumentoSalarioN1}`);
// } else if (anosTrabalho >= 5 && anosTrabalho <= 15) {
//     document.write(`${nome} Salario é ${salario} Com o Aumeno de 10% Agora é ${aumentoSalarioN2}`);
// } else {
//     document.write(`${nome} Salario é ${salario} Com o Aumeno de 15% Agora é ${aumentoSalarioN3}`);
// }


// Excercicio 16
// var valorVeiculo = parseFloat(prompt("Qual o valor do Veiculo"));
// var salario = parseFloat(prompt("Qual o seu Salario: "));
// var meses = parseInt(prompt("Em Quanto Meses Pretende Pagar: "));

// var prestacaoMensal = valorVeiculo / meses;
// var limitePrestacao = salario * 0.35;

// if (prestacaoMensal > limitePrestacao) {
//     document.write(`Financiamento negado. A prestação mensal de R$ ${prestacaoMensal}  excede 35% do salário.`);
// } else {
//     document.write(`Financiamento aprovado. A prestação mensal de R$ ${prestacaoMensal}`);
// }


// Excercicio 17
// var tipoViagem = parseInt(prompt("Selecione o Tipo de Viagem \n[1] Viagem Curta \n[2] Viagem Longa"));
// var diasViagem = parseInt(prompt("Quantos Dias de Viagem: "));
// var km = parseFloat(prompt("Quantos Quilometros Percorridos: "));

// switch (tipoViagem) {
//     case 1:
//         var calculoDiaCurto = 120 * diasViagem
//         var calculoKm1 = 0.50 * km
//         var calculoKm2 = 0.30 * km

//         if (km <= 50) {
//             document.write(`O Valor da Viagem fico ${calculoDiaCurto + calculoKm1}`);
//         } else {
//             document.write(`O Valor da Viagem fico ${calculoDiaCurto + calculoKm2}`);
//         }
//         break
//     case 2:
//         var calculoDiaLongo = 200 * diasViagem;
//         var calculoKm3 = 0.80 * km
//         var calculoKm4 = 0.60 * km

//         if (km <= 100) {
//             document.write(`O Valor da Viagem fico ${calculoDiaLongo + calculoKm3}`);
//         } else {
//             document.write(`O Valor da Viagem fico ${calculoDiaLongo + calculoKm4}`);
//         }
//         break
//     default:
//         document.write(`ERROR: Algum Valo esta Errado`);
// }


// Excercicio 18
var salario = parseFloat(prompt("Qual o Seu Salario Atual: "));
var genero = prompt("Qual o seu Genero: ").toUpperCase();
var anosTrabalho = parseFloat(prompt("Quantos Anos de Empressa: "));

var valorSalarioN1 = salario * 0.7
var valorSalarioN2 = salario * 0.15
var valorSalarioN3 = salario * 0.22

var valorSalarioN4 = salario * 0.4
var valorSalarioN5 = salario * 0.10
var valorSalarioN6 = salario * 0.18

if (genero == 'FEMININO') {
    if (anosTrabalho < 10) {
        document.write(`Seu Salario e de ${salario} com o aumento agora sera ${salario + valorSalarioN1}`)
    } else if (anosTrabalho >= 10 && anosTrabalho <= 20) {
        document.write(`Seu Salario e de ${salario} com o f aumento agora sera ${salario + valorSalarioN2}`)
    } else {
        document.write(`Seu Salario e de ${salario} com o aumento agora sera ${salario + valorSalarioN3}`)
    }
} else {
    if (anosTrabalho < 15) {
        document.write(`Seu Salario e de ${salario} com o aumento agora sera ${salario + valorSalarioN1}`)
    } else if (anosTrabalho >= 15 && anosTrabalho <= 25) {
        document.write(`Seu Salario e de ${salario} com o aumento agora sera ${salario + valorSalarioN2}`)
    } else {
        document.write(`Seu Salario e de ${salario} com o aumento agora sera ${salario + valorSalarioN3}`)
    }
}