const prompt = require ("prompt-sync")();

let soma = 0;

for (let i = 0; i < 5; i++){
    let num = [];
    num[i] = Number(prompt("Digite um número: "));
    soma += num[i];
}

console.log("A soma é " + soma);
