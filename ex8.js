const prompt = require('prompt-sync')();

let num1 = Number(prompt("Digite o numero 1: "));
let num2 = Number(prompt("Digite o numero 2: "));

if (num1 > num2)
    console.log(num2 + ", " + num1);
else
    console.log(num1 + ", " + num2);