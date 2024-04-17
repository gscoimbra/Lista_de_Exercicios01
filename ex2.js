const prompt = require('prompt-sync')();

let qnt_eleitores = Number(prompt("Quantidade de eleitores: "));
let qnt_votos_brancos = Number(prompt("Quantidade de votos brancos: "));
let qnt_votos_nulos = Number(prompt("Quantidade de votos nulos: "));
let qnt_votos_validos = Number(prompt("Quantidade de válidos: "));

let nao_votantes = qnt_eleitores - (qnt_votos_brancos + qnt_votos_nulos + qnt_votos_validos);

console.log("Percentual de votos brancos: " + ((qnt_votos_brancos/(qnt_eleitores - nao_votantes)) * 100).toFixed(0) + '%');
console.log("Percentual de votos nulos: " + ((qnt_votos_nulos/(qnt_eleitores - nao_votantes)) * 100).toFixed(0) + '%');
console.log("Percentual de votos válidos: " + ((qnt_votos_validos/(qnt_eleitores - nao_votantes)) * 100).toFixed(0) + '%');