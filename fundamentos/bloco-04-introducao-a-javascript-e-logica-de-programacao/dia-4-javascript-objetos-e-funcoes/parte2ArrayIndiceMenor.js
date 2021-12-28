let array = [-200,-41,-6,7,-10,0,-333];
let posi ;
let menor = array[0];

indiceMenor();

function indiceMenor(){
    
for(let i = 0; i<=array.length; i+=1){
  

    if(menor > array[i]){
       menor = array[i];
       posi = i; 
       console.log(posi);
   }
}
console.log("Menor ",menor,"Posição: ", posi);
};

