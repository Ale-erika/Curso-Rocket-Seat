// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e,
//a partir daí, calcular:

// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;

// Desafio
// Verifique se a soma dos dois números é par ou ímpar
// Verifique se os dois números inseridos são iguais ou diferentes

alert(
  "Exercício 01 - Operações Matemáticas"
);
let firstNumber = prompt("Digite o primeiro número: ");
let secondNumber = prompt("Digite o segundo número: ");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber;

const par = sum % 2;

alert("A soma dos dois números é: " + sum);
alert("A subtração dos dois números é: " + sub);
alert("A multiplicação dos dois números é: " + mult);
alert("A divisão dos dois números é: " + div);
alert("O resto da divisão dos dois números é: " + restDiv);

if (sum % 2 == 0) {
  alert("A soma dos dois números é par");
} else {
  alert("A soma dos dois números é ímpar");
}

if (firstNumber == secondNumber) {
  alert("Os dois números inseridos são iguais")
} else {
  alert ("Os dois números inseridos são diferentes")
}
