const prompt = require('prompt-sync')();

let num = parseInt(prompt("Quantidade de maçãs: "));

let price = null;

if (num >= 12)
    price = 0.25;
else
    price = 0.30;

console.log("Valor total da compra: R$" + (num * price));