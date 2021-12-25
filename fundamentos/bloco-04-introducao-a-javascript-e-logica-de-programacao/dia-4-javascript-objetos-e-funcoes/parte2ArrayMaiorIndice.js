let array = [2,3,6,7,10,1];
let maior = array[0];
let indice = 0 ;

maiorIndice();
function maiorIndice(){

for (let i = 0; i<=array.length; i+=1){
   
    if(array[i] > maior){
        indice = i;
        maior = array[i];
    }; 
   
};

};

console.log("Posição: ", indice , 'e Valor: ',maior);

