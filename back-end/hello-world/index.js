const readline = require('readline-sync')
const operations = require('./operacoes')

console.log('Calculadora Simple')
const num1 = readline.questionInt('qual n1')
const num2 = readline.questionInt('qual n2')
const ope = readline.question('qual a operação + - / *')

switch (ope) {
  case "+":
    operations.sum(num1, num2)
    break;

  default:
    console.log('não deu')
    break;
}
