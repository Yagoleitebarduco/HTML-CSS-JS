var output = document.querySelector('#output');
var msg = ' '

function criarTabuada() {
    alert("Tabuada Automatizada")
    var num = parseFloat(prompt("Digite o Numero que deseja Multiplicar: "));

    limparTabuada();
    for (i = 0; i <= 10; i++) {
        msg += `${num} X ${i} = ${num * i} <br>`;
    }

    output.innerHTML = msg;

    
}

function limparTabuada() {
    msg = ' ';
    output.innerHTML = msg;
}