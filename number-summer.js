const prompt = require('prompt-sync')();
console.log("enter numbers only");
let x = prompt(">")
let a = 0;
while (x!=="done") {
let xx = Number(x);
a = a + xx;
x = prompt(">")


}console.log("your total is:"+a);

