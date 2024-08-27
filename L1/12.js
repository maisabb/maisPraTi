const prompt = require ("prompt-sync")();

let num;

    num = prompt ("Digite um número: ");
    for (let i = 1; i <= 10; i++){
        console.log (i + " x " + num + " = " + num * i);
    }
