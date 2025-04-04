var idade = 18

// if (idade >= 18){
//     document.write(`Adulto`);
// } else {
//     document.write(`Menor de Idade`);
// }


// operador Ternario 
// idade >= 18 ? "Adulto" : ",enor de Idade"


// var temp = 30;
// var clima = temp >= 30 ? "Quente" : "Frio"
// document.write(`Esta ${clima}`)


// var n1 = parseFloat(prompt("Digite um numero: ")),
//     n2 = parseFloat(prompt("Digite outro Numero: "));
// var maiorNumero = n1 > n2
//     ? n1
//     : n2
// document.write(`O maior Numero é ${maiorNumero}`)


var nota1 = parseFloat(prompt("Digite a Nota 1: ")),
    nota2 = parseFloat(prompt("Digite a Nota 2: ")),
    nota3 = parseFloat(prompt("Digite a Nota 3: ")),
    nota4 = parseFloat(prompt("Digite a Nota 4: ")),
    media = (nota1 + nota2 + nota3 + nota4) / 4;
var resultado =
    media >= 9 ? "A" :
        media >= 8 ? "B" :
            media >= 7 ? "C" :
                media >= 6 ? "D" :
                    "f";
    document.write(`Aproveitamento : ${resultado}`);