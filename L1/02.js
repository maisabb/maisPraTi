let prompt = require("prompt-sync")();

let idade = prompt("Qual a idade? ");

if (idade <= 12){
    console.log("Criança");
}else if (idade > 12 && idade <= 17){
    console.log("Adolescente");
}else if (idade > 17 && idade < 60){
    console.log("Adulto");
}else {
    console.log("Idoso");
}