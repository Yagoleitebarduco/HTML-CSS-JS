// DOM = Document Object Model / Modelo de Objetos para Documentos
// .innerText = Duplica o que esta sendo capturado
// .innerHTML = Substitui o que esta sendo capturado

// SELEÇÃO POR TAG
// var paragrafo = document.getElementsByTagName('p')[0];

// Concatenado 
// document.write(paragrafo.innerText + "<br>"); 

// Interpolado
// document.write(`${paragrafo.innerText}`) 
// paragrafo.innerHTML = "Aqui Nos Mudadamos antes era " + paragrafo.innerText;

// Estilização por JavaScript
// paragrafo.style.color = '#fff';
// paragrafo.style.backgroundColor = '#000';
// paragrafo.style.padding = '20px'
// paragrafo.style.border = '4px solid green';
// paragrafo.style.width = '600px'


//SELEÇÃO POR ID
var div = document.getElementById('teste');

div.style.backgroundColor = '#000';
div.style.color = '#fff';
div.style.fontSize = '20px';
div.style.padding = '10px'
div.style.width = '600px'
div.style.margin = '20px'


//SELEÇÃO POR NAME
var div2 = document.getElementsByName('teste2')[0]

div2.style.backgroundColor = '#666';
div2.style.color = '#fff';
div2.style.fontSize = '20px';
div2.style.padding = '10px'
div2.style.width = '600px'
div2.style.margin = '20px'


//SELEÇÃO POR CLASS
var div3 = document.getElementsByClassName('teste3')[0];

div3.style.backgroundColor = '#444';
div3.style.color = '#fff';
div3.style.fontSize = '20px';
div3.style.padding = '10px'
div3.style.width = '600px'
div3.style.margin = '20px'


//SELEÇÃO POR SELECTOR
var h1 = document.querySelector('h1#titulo'); // class = 'h1.titulo'

h1.innerHTML = 'PRESTA A ATENCAO ANA CLARA PEDROSO GOMES';

