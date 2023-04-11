var evenNumber = 0;
var oddNumber = 0;
for (i = 1; i <= 20; i++) {

  console.log(i * i);
  if (i % 2 === 0) {
    evenNumber = evenNumber + i * i;
  }
  if (i % 2 === 1) {
    oddNumber = oddNumber + i * i;

  }

}

console.log("A soma dos quadrados pares: ", evenNumber);
console.log("A soma dos quadrados ímpares: ", oddNumber);