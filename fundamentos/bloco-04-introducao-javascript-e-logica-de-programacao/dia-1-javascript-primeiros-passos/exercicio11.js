let salarioBruto = 3000;
let salarioBase;
let salarioLiquido;
let inss;
let descontoIR;


if (salarioBruto <= 1556.94){
inss = salarioBruto * 0.08;
salarioBase = salarioBruto - inss;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    inss = salarioBruto * 0.09;
    salarioBase = salarioBruto - inss;
} else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    inss = salarioBruto * 0.11;
    salarioBase = salarioBruto - inss;
} else if(salarioBruto > 5189.82){
    inss = salarioBruto - 570.88;
    salarioBase = salarioBruto - inss;
}



if(salarioBase <= 1903.98){

} else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    descontoIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    descontoIR = (salarioBase * 0,15) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    descontoIR = (salarioBase * 0,225) - 636.13;
} else if ( salarioBase >= 4664.68){
    descontoIR = (salarioBase * 0,275)- 869.36}


salarioLiquido = salarioBase - descontoIR;

console.log(salarioLiquido)
