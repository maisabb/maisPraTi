const prompt = require ("prompt-sync")();

let num, conta = 0, contador = 0;


while ((num = parseFloat(prompt("Digite um número decimal: "))) != 0){
    conta += num;
    contador++;
}

let media = conta/contador;

console.log ("A média é igual a",media);