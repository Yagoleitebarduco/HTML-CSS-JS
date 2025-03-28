// REPETIÇÃO DE NUMEROS
// var num = parseFloat(prompt("Digite um Numero: "));
// var ind = 1;
// while(ind <= 10) {
//     document.write(`${num} X ${ind} = ${num * 1} <br>`);
//     ind++
// }
// document.write(`Acabou!!!`);


// REPETIÇÃO DE TEXTO
// var c = 1;
// while(c < 6) {
//     document.write(`Seja bem-vindo <br>`)
//     c++
// }


// var valor = parseFloat(prompt("Quer Contar ate Quantos ?"));
// var final = parseFloat(prompt("e de Quantos em Quantos ?"));
// var contador = parseFloat(prompt("Quer Iniciar em Qual Numero ?"));

// while(contador <= valor) {
//     document.write(contador + '<br>')
//     contador = contador + final;
// }

// document.write(`Fim.`)

// Soma de Valores e Distinção do Maior
// var cont = 1;
// var soma = 0;
// var maior = 0;

// while(cont <= 5) {
//     var num = parseFloat(prompt(`Digite o ${cont}º valor: `));

//     if (num > maior) {
//         maior = num;
//     }

//     soma = soma + num;
//     cont++
// }

// document.write(`A Soma de Todos os Valor e ${soma} <br>`);
// document.write(`O Maior Valor Digitado é  ${maior}`);


// doWhile
// var cont = 1;

// do {
//     document.write(`${cont} <br>`)
//     cont++
// } while (cont <= 10)


// Tabudad com doWhile
// var tab = parseFloat(prompt("Quer ver Tabuada de qual numero ?"));
// var contador = 0

// do {
//     var resultado = tab * contador;

//     document.write(`${tab} X ${contador} = ${resultado} <br>`);
//     contador++
// } while (contador <= 10)


//FOR
// for (c = 1; c <= 10; c++) {
//     document.write(c + '<br>')
// }


// Tabuada for
// var num = parseFloat(prompt("Digite um numero: "))

// for (cont = 0; cont <= 10; cont++) {
//     document.write(`${num} X $ ${cont} = ${num * cont}`);

//     if (cont % 10 == 0){
//         document.write(`<br><hr>`)
//     }
// }