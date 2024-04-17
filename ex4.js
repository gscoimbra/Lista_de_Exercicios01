const prompt = require('prompt-sync')();

let nota1 = Number(prompt("Nota 1: "));
let nota2 = Number(prompt("Nota 2: "));

if ((nota1 + nota2)/2 >= 6)
    console.log("Média: " + ((nota1 + nota2)/2) + " \nPARABÉNS! Você foi aprovado");
