let prompt = require("prompt-sync")();

let n1 = 0, n2 = 1, proximoNumero;

console.log(n1); 
console.log(n2); 

for (let i = 3; i <= 10; i++) {
    proximoNumero = n1 + n2;
    console.log(proximoNumero);
    
    n1 = n2;
    n2 = proximoNumero;
}
