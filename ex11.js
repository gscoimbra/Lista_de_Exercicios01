const prompt = require('prompt-sync')();

while(true) {
    let num = parseInt(prompt("Digite um número: "));

    if (num < 0 || isNaN(num))
        break;
    else if (num % 2 == 0)
        console.log(num + " é PAR");
    else
        console.log(num + " é ÍMPAR");
}