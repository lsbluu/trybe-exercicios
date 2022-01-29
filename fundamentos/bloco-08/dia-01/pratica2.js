
const aposta = (number) =>{
    let numberRandom = Math.floor(Math.random() * 5) + 1 ;
    return sorteio (number,numberRandom);
   
}



const sorteio = (number, numberRandom) =>{
    if(number === numberRandom){
        return 'Parabens';

    } else{
      
        return 'Errou';
    }
}


const result = (number) =>{
    return aposta(number);

}


console.log(result(2));
