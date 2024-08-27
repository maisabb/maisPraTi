let prompt = require("prompt-sync")();

switch (Number(prompt("Digite um número de 1 a 3: "))){
    case 1:
        console.log("Vc escolheu a opção 1");
        break;
    case 2:
        console.log("Vc escolheu a opção 2");
        break;
    case 3:
        console.log("Vc escolheu a opção 3");
        break;
}