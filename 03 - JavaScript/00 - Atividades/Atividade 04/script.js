function caucular() {
    let produto = prompt("Que Produto esta Comprando ?");
    let preco = Number(prompt(`Quanto Custa o ${produto} que esta Comprando ?`));
    let pago = Number(prompt(`Qual foi o valor que você deu pra pagar o ${produto}`));

    let troco = pago - preco;

    alert(`Você comprou ${produto} que custa R$ ${preco} \nDeu R$ ${pago} em Dinheiro e vai receber de troco R$ ${troco} \nVolte Sempre!`)
}