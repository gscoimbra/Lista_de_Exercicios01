const prompt = require('prompt-sync')();

for (let i = 0; i < 5; i++) {
    let n = parseInt(prompt("Digite N: "));
    
    for (let j = 0; j <= 10; j++) {
        console.log(j + " x " + n + " = " + j * n);
    }
    console.log("---------------");
}