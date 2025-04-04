// EXERCICIO 19
// var i = 6 
// while (i <= 11) { 
//     document.write(`${i} `); 
//     i++ 
// }  
// document.write(`Acabou!`); 


// EXERCICIO 20
// var i = 10
// while (i >= 3) {
//     document.write(`${i} `)
//     i--
// } document.write(`Acabou!`)


// EXERCICIO 21
// var i = 0
// while(i <= 18) {
//     document.write(`${i} `)
//     i = i + 3
// } document.write(`Acabou!`)


// EXERCICIO 22
// var i = 100
// while(i >= 0) {
//     document.write(`${i} `)
//     i = i - 5
// } document.write(`Acabou!`)


// EXERCICIO 23
// var nI = parseFloat(prompt("Digite o Valor Inicial: ")),
//     nF = parseFloat(prompt("Digite o Valor Final: ")),
//     valorIncremento = parseFloat(prompt("Digite o Valor do Incremento: "));

// while (nI < nF) {
//     document.write(`${nI} `)
//     nI = nI + valorIncremento
// } document.write(`Acabou!`)


// EXERCICIO 24
// var soma = 0

// for (var i = 6; i <= 100; i = i + 2){
//     soma += i
// } document.write(`${soma}`)


// EXERCICIO 25
// var nI = parseFloat(prompt("Digite o Incio: ")),
//     nF = parseFloat(prompt("Digite o Final: "));

// while (nI <= nF) {
//     document.write(`${nI} <br>`)
//     nI++
// }


// EXERCICIO 26
// var alunos = parseInt(prompt("Quantos Alunos deseja registrar: "));
// var melhorNota = 0;
// var melhorAluno = " "


// for (var i = 1; i <= alunos; i++) {
//     var nome = prompt(`Digite o Nome Aluno ${i}: `);    
//     var nota = parseFloat(prompt(`Digite a Nota do Aluno ${nome}: `));
    
//     if (nota > melhorNota) {
//         melhorNota = nota
//         melhorAluno = nome
//     }
// }

// document.write(`O aluno com a melhor nota é ${melhorAluno} = ${melhorNota}.`)


// EXERCICIO 27
// var pergunta = parseInt(prompt("Qual Sequincia deseja Executar \n[1] De 1 a 10 \n[2] De 10 a 1 \n[3] Sair"));

// switch(pergunta) {
//     case 1:
//         for(var i = 1; i <= 10; i++){
//             document.write(`${i} <br>`);
//         }
//         break
//     case 2:
//         for(var i = 10; i >= 1; i--){
//             document.write(`${i} <br>`);
//         }
//         break
//     case 3:
//         window.location.href - "https://www.google.com.br/?hl=pt-BR"
//         break
//     default:
//         document.write(`ERROR: Algum Parametro Incorreto`)
// }


// EXERCICIO 28
// for(var i = 0; i <= 40; i =  i + 5){
//     document.write(`${i} <br>`);
// } document.write(`Acabou!`);