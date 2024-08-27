let prompt = require("prompt-sync")();

let peso = Number(prompt("Digite o peso: "));
let altura = Number(prompt("Digite a altura: "));

let imc = peso/(altura * altura);

if (imc <= 18.4){
    console.log("Abaixo do peso")
}else if (imc > 18.4 && imc <= 24.9){
    console.log("Peso normal");
}else if (imc > 24.9 && imc <= 29.9){
    console.log("Sobrepeso");
}else {
    console.log("Obesidade");
}
