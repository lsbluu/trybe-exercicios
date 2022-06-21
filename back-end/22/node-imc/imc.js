const readline = require('readline-sync');

const handleImc = () => {
  const weight = readline.questionFloat("Qual seu peso? ");
  const height = readline.questionFloat("Qual sua altura? ");
  
  const validateImc = (imc) => {
    if(imc < 18.5){
     console.log(imc,'Abaixo do peso');
    } if(imc >= 18.5 && imc <= 24.9){
      console.log(imc,'Peso normal');
    } if(imc >= 25 && imc <= 29.9){
      console.log(imc,'Acima do peso');
    } if(imc >= 30.0 && imc <= 34.9){
      console.log(imc,'Obesidade GRAU 1');
    } if(imc >=35.0 && imc <=39.9){
      console.log(imc,'Obresidade GRAU II');
    } if(imc >= 40.0){
      console.log('Obesudade morbida');
    }
  }
  
  const imc = (weight, height) => 
     `${weight / (height^2)}`;
     
     validateImc(imc(weight, height));
}


// console.log();

module.exports = {
  handleImc
}