const prompt = require("prompt-sync")();

// Leia os três números
n1 = parseFloat(prompt("Digite o número 1: "));
n2 = parseFloat(prompt("Digite o número 2: "));
n3 = parseFloat(prompt("Digite o número 3: "));
// Calcule a soma e a média
soma = n1 + n2 + n3;
media = soma / 3;
// Mostre na tela o valor da soma e média

console.log("A soma é: ",soma);
console.log("A média é: ", media);




