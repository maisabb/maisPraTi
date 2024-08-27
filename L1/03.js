let prompt = require("prompt-sync")();

let nota = Number(prompt("Digite a nota: "));

if (nota < 5){
    console.log("Reprovado");
}else if (nota >= 5 && nota < 6){
    console.log("Recuperação");
}else if (nota >= 6 && nota <= 10) {
    console.log("Aprovado");
}else {
    console.log("Nota inválida.");
}