let array = [2,4,6,7,10,0,-3];
let posi;
let menor = array[0];

indiceMenor();

function indiceMenor(){
for(let i = 0; i<=array.length; i+=1){
   if(menor > array[i]){
       posi = i; 
       menor = array[i];
   }
}
console.log("Menor ",menor,"Posição: ", posi);
};

