const prompt = require('prompt-sync')();

let t_celsius = Number(prompt("Digite a temperatura em celsius: "));

console.log("Temperatura em Fahrenheit: " + (t_celsius * 1.8 + 32));