const prompt = require('prompt-sync')();

let sum = 0;
let cont = 0;

while(true) {
    let num = parseFloat(prompt("Digite um número: "));
    if (num == 0) {
        console.log("Média: " + sum/cont);
        break;
    } else {
        let weight = parseFloat(prompt("Digite o peso: "));
        sum += num * weight;
        cont += weight;
    }
}