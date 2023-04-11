const prompt = require("prompt-sync")();
var idade = parseInt(prompt("Digite sua idade: "));
var serviceTime = parseInt(prompt("Digite o tempo de serviço: "));
var salary = parseFloat(prompt("Digite seu salário: "));

if (idade >= 65 || serviceTime >= 30 || (idade >= 60 && serviceTime <= 25)) {
  console.log("Você pode aposentar");

  if (serviceTime > 20) {
    retiredSalary = salary * 0.8;
  } else {
    retiredSalary = salary * 0.6;
  }

  if (retiredSalary < 1212) {
    retiredSalary = 1212;
  }
  if (retiredSalary > 7087.22) {
    retiredSalary = 7087.22;
  }

  console.log("Seu salário será de R$:" + "", retiredSalary);
} else {
  console.log("Você não pode se aposentar");
}
