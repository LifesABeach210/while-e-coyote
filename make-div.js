const prompt = require('prompt-sync')();

let x = Number(prompt('Enter the first number: '));
let y = Number(prompt('Enter the second number: '));



while (x % y !== 0) {
    x++;
}

console.log("The answer: " + x + " is divisble by " + y + ".")