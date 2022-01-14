/*5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 .*/

let array = [2, 3, 2, 5, 8, 2, 3];
let contador = 0;
let repete = 0;

for(let i = 0; i<=array.length-1;i+=1){
        for(let j = i +1; j<=array.length-1; j+=1){
            

            if(array[i] === array[j]){
                contador +=1;
            }
            console.log(array[i],"X",array[j], contador); 

       }
   }

   
 



