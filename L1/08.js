let prompt = require("prompt-sync")();

let a = Number(prompt("Primeiro número: "));
let b = Number(prompt("Segundo número: "));

if (a > b){
    console.log(a, b);
}else{
    console.log(b, a);
}