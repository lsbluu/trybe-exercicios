let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar =0;
let par = 0;
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";


for(let i = 0; i < numbers.length; i+=1){
    if(numbers[i] %2 === 1){
        impar +=1;
    } else{
        par +=1;
    }

  }

  console.log(impar, "Impares encontrados");