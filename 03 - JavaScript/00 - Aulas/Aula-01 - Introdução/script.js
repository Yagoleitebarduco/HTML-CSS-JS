// Formas de Variaveis
/*
    var (Global = Puxa ela a Qualquer Momento, Pode ser Sopreposto por outro var com o memso 'nome') 
    let (Não Global = Crida Dentro de um Bloco não Pode ser Chamada a Qualquer Momento, Não Pode ser Sopreposto, Mas Pode Ser Reinterpretado)
    const (Não Pode ser Sopreposto nem Pode ser Reinterpretada)
*/

// Formas de Saida
/* 
    Concatenação
        alert("Ola " + nome + " " + sobrenome + ", Muito Prazer"); 

    Interpolção
        document.write(`Munto Prazer, ${nome} ${sobrenome} `);

*/

// Tipos de Variaveis
/*
    String = ""
    number = 00
    boolean = true/false
*/

// Com virgula (,) replica a variavel
// Formas de nomeação de Variavel
/*
    So o Nome = nome 
    Com Sifrao = $nome
    Com Underscore = _nome
    camelCase = nomeCompleto
*/


//Conversao de String para Number
// Forma 1
var n1 = prompt("Digite um Numero: ");
n1 = parseFloat(n1);

// Forma 2
var n2 = parseFloat(prompt("Digite Mais um Numero: "));

alert(n1 + n2);