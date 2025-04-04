var tn1 = document.getElementById('num1');
var tn2 = document.getElementById('num2');
var res = document.getElementsByTagName('div')[0];

var soma = document.querySelector('#somar')
soma.addEventListener('click', somar)

function somar() {
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    var s = n1 + n2;

    res.innerHTML = `A somas do Valor ${tn1} + ${tn2} = ${s}`
}